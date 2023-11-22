
const MenuItem = ({ item }) => {
    return (
        <div className="flex items-center gap-6">
            <div>
                <img className="w-[100px] h-[90px] rounded-b-[200px] rounded-tr-[200px]" src={item.image} />
            </div>
            <div className="w-[400px]">
                <div className="flex items-center justify-between font-bold text-xl ">
                    <h1 className="mb-2">{item.name} ---</h1>
                    <p className="text-yellow-500">$ {item.price}</p>
                </div>
                <p className="text-sm">{item.recipe}</p>
            </div>
        </div>
    );
};

export default MenuItem;