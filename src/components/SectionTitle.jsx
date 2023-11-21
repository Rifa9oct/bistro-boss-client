

const SectionTitle = ({heading,subHeadng}) => {
    return (
        <div className="text-center">
            <p className="text-[#D99904] text-[20px]">--- {subHeadng} ---</p>
            <h1 className="text-4xl lg:text-5xl font-extrabold border-y-4 py-3 mt-3 mb-12 w-[424px] mx-auto">{heading}</h1>
        </div>
    );
};

export default SectionTitle;