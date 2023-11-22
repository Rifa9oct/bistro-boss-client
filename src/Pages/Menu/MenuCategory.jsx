import Cover from "../Shared/Cover/Cover";
import MenuItem from "../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img,butnTitle}) => {
    return (
        <div>
            <div className="my-16">{title && <Cover img={img} title={title}></Cover>}</div>
            <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                {
                    items.map(item => <MenuItem
                        key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="flex justify-center">
                <button className="btn btn-outline border-0 border-b-4">{butnTitle}</button>
            </div>
        </div>
    );
};

export default MenuCategory;