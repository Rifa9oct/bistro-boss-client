import { useContext } from "react";
import video from "../../assets/videos/signup.mp4"
import { AuthContext } from "../../AuthProvider/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
    const { signInWithGoogle } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                Navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="flex items-center gap-20 justify-center my-7 p-5 lg:p-0">
            <div className="rounded-2xl border-gradient w-[500px] p-1">
                <h1 className="text-5xl text-black text-center font-extrabold my-5">SIGN UP</h1>

                <p className="text-sm font-bold text-center my-2">Already Have an Account ? <Link to="/signin"><span className="header text-base">Please Sign In</span></Link></p>

                {/* continue with google */}
                <div onClick={handleGoogleSignIn} className="flex items-center justify-center gap-4 font-semibold text-center">
                    <p className="text-sm font-bold">Sign up with</p>
                    <p className="flex items-center gap-1 border-2 py-2 px-3 rounded-lg border-cyan-400 hover:text-blue-500 cursor-pointer"><FcGoogle className="text-2xl"></FcGoogle>Google</p>
                </div>

                <div className="divider text-black font-bold px-10">or</div>
                <form className="card-body px-10 pt-0">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <div className="relative">
                            <input type="text" name="name" placeholder="your name" className="input input-sm input-info w-full" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <div className="relative">
                            <input type="text" name="photo url" placeholder="your photo url" className="input input-sm input-info w-full" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <div className="relative">
                            <input type="email" name="email" placeholder="your email" className="input input-sm input-info w-full" required />
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password" placeholder="Password" className="input input-sm w-full input-info" required />
                            <span className="absolute top-2 right-4" onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                }
                            </span>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn border-0 text-white bg-gradient-to-r from-cyan-400 to-blue-400 shadow-lg shadow-blue-500/50 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500">Sign Up</button>
                    </div>
                </form>
            </div>
            <video className="hidden md:block" autoPlay loop muted>
                <source src={video} type="video/mp4" />
            </video>
        </div>
    );
};

export default Signup;