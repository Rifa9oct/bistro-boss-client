import { useContext } from "react";
import video from "../../assets/videos/signup.mp4"
import { AuthContext } from "../../AuthProvider/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useForm} from "react-hook-form";
import { MdError} from "react-icons/md";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";

const Signup = () => {
    const { signInWithGoogle, createUser} = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    
    const onSubmit = data =>{
        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user);
                Swal.fire("Great!", "Sign up successful", "success");
                updateProfile(result.user, {
                    displayName: data.name,
                    photoURL: data.photoUrl
                })
                reset();  
            })
            .catch(error => {
                Swal.fire("Opps!", error.message, "error");
            })
    }

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

                {/* form */}
                <form onSubmit={handleSubmit(onSubmit)} className="card-body px-10 pt-0">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <div>
                            <input type="text" {...register("name", { required: true })}
                            name="name" placeholder="your name" className="input input-sm input-info w-full"/>
                             {errors.name && <span className="text-sm text-red-500"><MdError className="text-lg inline"/> Name field is required.</span>}
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <div>
                            <input type="text" {...register("photo url")} name="photo url" placeholder="your photo url" className="input input-sm input-info w-full"/>
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <div>
                            <input type="email" {...register("email", { required: true })} name="email" placeholder="your email" className="input input-sm input-info w-full"/>
                            {errors.email && <span className="text-sm text-red-500"><MdError className="text-lg inline"/> Email address is required.</span>}
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                {...register("password", { required: true, minLength:6, maxLength: 20, pattern:/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/})}
                                name="password" placeholder="Password" className="input input-sm w-full input-info"/>
                                {errors.password?.type  === "required" &&  <p className="text-sm text-red-500"><MdError className="text-lg inline"/> Password is required.</p>}
                                {errors.password?.type  === "minLength" && <p className="text-sm text-red-500"><MdError className="text-lg inline"/> Password must be 6 characters.</p>}
                                {errors.password?.type  === "maxLength" && <p className="text-sm text-red-500"><MdError className="text-lg inline"/> Password must be less than 20 characters.</p>}
                                {errors.password?.type  === "pattern" && <p className="text-sm text-red-500"><MdError className="text-lg inline"/> Password must have one upper case, one lower case, one number, one special character.</p>}


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