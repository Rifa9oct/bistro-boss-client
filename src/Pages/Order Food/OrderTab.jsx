import FoodCard from "../../components/foodCard";


const OrderTab = ({items}) => {
    return (
        <div className="mt-10 mb-24 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 mx-auto max-w-[1320px]">
            {
                items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;