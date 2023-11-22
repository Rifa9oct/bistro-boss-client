

const Cover = ({ img, title }) => {
    return (
        <div className="hero min-h-[650px]" style={{ backgroundImage: `url(${img})` }}>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-[800px] bg-black bg-opacity-60 p-20">
                    <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
            </div>
        </div>
    );
};

export default Cover;