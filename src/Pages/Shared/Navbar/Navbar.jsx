import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../AuthProvider/AuthContext";
import logo from "../../../assets/logo.png"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [dropdown, setDropdown] = useState(false);

    const navLinks = <>
        <li> <NavLink to="/" className={({ isActive, isPending }) =>
            isActive ? "active rounded-lg  text-yellow-300 font-semibold" : isPending ? "pending" : ""}>HOME</NavLink>
        </li>
        <li> <NavLink to="/menu" className={({ isActive, isPending }) =>
            isActive ? "active rounded-lg  text-yellow-300 font-semibold" : isPending ? "pending" : ""}>OUR MENU</NavLink>
        </li>
        <li> <NavLink to="/order/salad" className={({ isActive, isPending }) =>
            isActive ? "active rounded-lg  text-yellow-300 font-semibold" : isPending ? "pending" : ""}>ORDER FOOD</NavLink>
        </li>
    </>


    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire(
                    'Thank you',
                    'Sign Out successfully',
                    'success'
                )
            })
            .catch(error => console.error(error))
    }

    return (
        <div className="navbar fixed z-10 mb-10 flex-col md:flex-row w-full bg-opacity-30 bg-black lg:px-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                    <ul tabIndex={0} className="flex flex-col gap-4 font-semibold dropdown-content mt-3 z-[1] p-6 py-6 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div className="flex items-center gap-2">
                    <img className="w-[30%] md:w-[20%] mx-auto md:mx-0" src={logo} />
                    <div className="text-white mt-3">
                        <h1 className="text-xl md:text-3xl font-bold">BISTRO BOSS</h1>
                        <p className="tracking-[5px] md:tracking-[9px]">Restaurant</p>
                    </div>
                </div>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="text-white flex gap-8 font-semibold">
                    {navLinks}
                </ul>
            </div>

            <div className="md:navbar-end mt-4 md:mt-0">
                {
                    user ?
                        <div className="flex items-center">
                            <div className="flex items-center">
                                {
                                    user.photoURL ?
                                        <img className="w-[50px] h-[50px] mx-3 rounded-full border-[2px]" src={user.photoURL} /> :
                                        <img className="w-[50px] h-[50px] mx-3 rounded-full border-blue-900" src="https://i.ibb.co/VC1vhmp/user.png" />
                                }
                                <a onClick={handleLogOut} className="flex items-center md:hidden btn text-bsm bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:scale-110 transition font-semibold"> <LuLogOut className="text-xl" />Sign Out</a>
                            </div>

                            {/* dropdown signout */}
                            <div className="hidden md:block">
                                {
                                    dropdown ?
                                        <div>
                                            <p onClick={() => setDropdown(!dropdown)}><IoIosArrowUp className="text-2xl cursor-pointer text-white" /></p>
                                            <div className="absolute z-10 top-[80px] right-[40px] w-[300px] rounded-lg shadow-lg transit bg-black bg-opacity-60">
                                                <div className="flex items-center gap-2 justify-center pt-10">
                                                    {
                                                        user.photoURL ?
                                                            <img className="w-[45px] h-[45px] mx-3 rounded-full " src={user.photoURL} /> :
                                                            <img className="w-[45px] h-[45px] mx-3 rounded-full border-blue-900" src="https://i.ibb.co/VC1vhmp/user.png" />
                                                    }
                                                    <div className="text-white">
                                                        <p className="font-extrabold">{user.displayName}</p>
                                                        <p className="text-sm">{user.email}</p>
                                                    </div>
                                                </div>
                                                <div className="divider pt-5"></div>
                                                <div onClick={handleLogOut} className="flex items-center gap-2 ml-12 pt-4 pb-10 cursor-pointer text-white">
                                                    <LuLogOut className="text-2xl" />
                                                    <a className="font-extrabold">Sign Out</a>
                                                </div>
                                            </div>

                                        </div>
                                        :
                                        <div>
                                            <p onClick={() => setDropdown(!dropdown)}><IoIosArrowDown className="text-2xl cursor-pointer text-white" /></p>

                                        </div>
                                }
                            </div>
                        </div>
                        :
                        <Link to="/signin">
                            <button className="btn rounded-full px-8 border-0 text-base bg-gradient-to-r from-orange-500 to-yellow-400 text-white hover:scale-105 transition font-semibold">Sign In</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;