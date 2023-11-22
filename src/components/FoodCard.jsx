
const FoodCard = ({ item }) => {
    return (
        <div className="card w-96 bg-[#F3F3F3] shadow-xl">
            <figure><img className="w-96" src={item.image}/></figure>
            <div className="card-body">
                <h2 className="card-title mx-auto">{item.name}</h2>
                <p className="text-center">{item.recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-outline bg-[#E8E8E8] border-0 border-b-4 border-b-yellow-500 text-yellow-500">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;