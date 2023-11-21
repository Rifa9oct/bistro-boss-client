import { useContext, useEffect, useState } from "react";
import video from "../../assets/videos/signin.mp4"
import { MdEmail } from "react-icons/md";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { BiSolidLock } from "react-icons/bi";
import { TbCaptureFilled } from "react-icons/tb";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../AuthProvider/AuthContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [disable, setDisable] = useState(true)

    //react-simple-captcha
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const { signinUser, setLogin, signInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSignin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signinUser(email, password)
            .then(() => {
                Swal.fire("Good job", "Signin successful", "success");
                setLogin(true);
                navigate(location?.state ? location.state : "/")
                e.target.reset();
            })
            .catch(error => {
                Swal.fire("Signin Error", error.message, "error")
                console.log(error);
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                console.log(error)
            })
    }


    //react-simple-captcha
    const handleValidateCaptcha = e => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value) == true) {
            setDisable(false);
        }

        else {
            setDisable(true);
        }
    }

    return (
        <div className="flex items-center gap-20 justify-center mt-7 mb-10 p-5 lg:p-0">
            <video className="hidden lg:block" autoPlay loop muted>
                <source src={video} type="video/mp4" />
            </video>

            <div className="rounded-2xl border-gradient w-[500px] p-1">
                <h1 className="text-5xl text-black text-center font-extrabold my-5">SIGN IN</h1>

                <p className="text-sm font-bold text-center my-2">New here? <Link to="/signup"><span className="header text-base">Create a New Account</span></Link></p>
                {/* continue with google */}
                <div onClick={handleGoogleSignIn} className="flex items-center justify-center gap-4 font-semibold text-center">
                    <p className="text-sm font-bold">Sign in with</p>
                    <p className="flex items-center gap-1 border-2 py-2 px-3 rounded-lg border-cyan-400 hover:text-blue-500 cursor-pointer"><FcGoogle className="text-2xl"></FcGoogle>Google</p>
                </div>

                <div className="divider text-black font-bold px-10">or</div>

                <form onSubmit={handleSignin} className="card-body px-10 pt-0">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <div className="relative">
                            <input type="email" name="email" placeholder="your email" className="input pl-11 input-bordered input-info w-full" required />
                            <span className="absolute top-4 left-4"> <MdEmail className="text-xl" /></span>
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password" placeholder="Password" className="input pl-11 w-full input-info" required />
                            <span className="absolute top-3 left-4"><BiSolidLock className="text-xl" /></span>
                            <span className="absolute top-4 right-4" onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                }
                            </span>
                        </div>
                    </div>

                    <label className="mb-2">
                        <a href="#" className="text-sm text-gray-600 link link-hover">Forgot password?</a>
                    </label>

                     {/* captcha */}
                    <div className="form-control">
                        <label className="label pt-0">
                            <LoadCanvasTemplate />
                        </label>
                        <div className="relative">
                            <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="type the text above" className="input pl-11 input-bordered input-info w-full" required />
                            <span className="absolute top-4 left-4"> <TbCaptureFilled className="text-xl" /></span>
                        </div>
                    </div>

                    <div className="form-control mt-6">
                        <button type="submit" disabled={disable} className="btn text-white bg-gradient-to-r from-cyan-400 to-blue-400 shadow-lg shadow-blue-500/50 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500">Sign In</button>
                    </div>
                </form>




            </div>
        </div>
    );
};

export default SignIn;