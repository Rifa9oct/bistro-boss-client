import video from "../../assets/videos/signup.mp4"

const Signup = () => {
    return (
        <div>
            <video className="hidden md:block" autoPlay loop muted>
                <source src={video} type="video/mp4" />
            </video>
        </div>
    );
};

export default Signup;