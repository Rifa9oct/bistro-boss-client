import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../components/SectionTitle";
import MenuCategory from "../Menu/MenuCategory";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === "popular");
    return (
        <div className="mb-32">
            <SectionTitle
                heading="FROM OUR MENU"
                subHeadng="Check it out"
            ></SectionTitle>
            <MenuCategory items={popular} butnTitle="View Full  Menu"></MenuCategory>
        </div>
    );
};

export default PopularMenu;