import SectionTitle from "../../components/SectionTitle";
import img from "../../assets/home/featured.jpg"


const Featured = () => {
    const bgImg = {
        backgroundImage: 'url("https://i.ibb.co/JvQ9Czz/featured.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition:"center"
    };

    return (
        <div className=" text-white mb-20 bg-fixed" style={bgImg}>
            <div className="bg-black bg-opacity-40 py-20">
                <SectionTitle
                    heading="FROM OUR MENU"
                    subHeadng="Check it out"
                ></SectionTitle>
                <div className="flex items-center justify-center gap-16">
                    <div>
                        <img className="w-[500px] h-[350px]" src={img} />
                    </div>
                    <div className="w-[600px]">
                        <h1 className="font-bold">March 20, 2023<br />WHERE CAN I GET SOME?</h1>
                        <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="btn btn-outline border-0 border-b-4 mt-6 text-white">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;