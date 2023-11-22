import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthContext";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useCart from "../Hooks/useCart";

const FoodCard = ({ item }) => {
    const { name, image, price, recipe, _id } = item;
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useCart();

    const handleAddToCart = () => {
        if (user && user.email) {
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post("/carts", cartItem)
                .then(res => {
                    if(res.data.insertedId){
                        Swal.fire({
                            position: "top-center",
                            icon: "success",
                            title: "Your food has been added",
                            showConfirmButton: false,
                            timer: 1500
                          });
                          refetch();
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not Sign In",
                text: "Please SignIn to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Sign  In!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/signin", { state: { form: location } })
                }
            });
        }
    }

    return (
        <div className="card w-96 bg-[#F3F3F3] shadow-xl">
            <figure><img className="w-96" src={image} /></figure>
            <div className="card-body">
                <h2 className="card-title mx-auto">{name}</h2>
                <p className="text-center">{recipe}</p>
                <p className="absolute text-white bg-black px-3 top-0 right-0 mt-4 mr-4">$ {price}</p>
                <div onClick={handleAddToCart} className="card-actions justify-center">
                    <button className="btn btn-outline bg-[#E8E8E8] border-0 border-b-4 border-b-yellow-500 text-yellow-500">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;