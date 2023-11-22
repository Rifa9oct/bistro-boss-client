import Cover from "../Shared/Cover/Cover";
import SectionTitle from "../../components/SectionTitle"
import useMenu from "../../Hooks/useMenu";
import MenuCategory from "./MenuCategory";
import img from "../../assets/menu/banner3.jpg"
import dessertImg from "../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../assets/menu/pizza-bg.jpg"
import saladImg from "../../assets/menu/salad-bg.jpg"
import soupImg from "../../assets/menu/soup-bg.jpg"


const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === "offered");
    const dessert = menu.filter(item => item.category === "dessert");
    const pizza = menu.filter(item => item.category === "pizza");
    const salad = menu.filter(item => item.category === "salad");
    const soup = menu.filter(item => item.category === "soup");

    return (
        <div>
            <Cover img={img} title="OUR MENU" ></Cover>
            <div className="my-20">
                <SectionTitle
                    heading="TODAY'S OFFER"
                    subHeadng="Don't miss"
                >
                </SectionTitle>
                <MenuCategory butnTitle="ORDER YOUR FAVOURITE FOOD" items={offered}></MenuCategory>
                <MenuCategory butnTitle="ORDER YOUR FAVOURITE FOOD" items={dessert} title="dessert" img={dessertImg}></MenuCategory>
                <MenuCategory butnTitle="ORDER YOUR FAVOURITE FOOD" items={pizza} title="pizza" img={pizzaImg}></MenuCategory>
                <MenuCategory butnTitle="ORDER YOUR FAVOURITE FOOD" items={salad} title="salad" img={saladImg}></MenuCategory>
                <MenuCategory butnTitle="ORDER YOUR FAVOURITE FOOD" items={soup} title="soup" img={soupImg}></MenuCategory>
            </div>
        </div>
    );
};

export default Menu;