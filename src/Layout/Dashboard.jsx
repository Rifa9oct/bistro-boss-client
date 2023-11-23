import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";


const Dashboard = () => {
    const [cart] = useCart();

    const [isAdmin] = useAdmin();
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-yellow-400">
                <ul className="menu p-5">
                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/adminHome">
                                <FaHome className="text-xl"></FaHome>
                                Admin Home</NavLink>
                            </li>
                            <li><NavLink to="/dashboard/addItems">
                                <FaUtensils className="text-xl"></FaUtensils>
                                Add Items</NavLink>
                            </li>
                            <li><NavLink to="/dashboard/manageItems">
                                <FaList className="text-xl"></FaList>
                                Manage Items</NavLink>
                            </li>
                            <li><NavLink to="/dashboard/review">
                                <FaAd className="text-xl"></FaAd>
                                Add Review</NavLink>
                            </li>
                            <li><NavLink to="/dashboard/manageBookings">
                                <FaBook className="text-xl"></FaBook>
                                Manage Bookings</NavLink>
                            </li>
                            <li><NavLink to="/dashboard/users">
                                <FaList className="text-xl"></FaList>
                                All Users</NavLink>
                            </li>
                        </>
                            : <>
                                <li><NavLink to="/dashboard/userhome">
                                    <FaHome className="text-xl"></FaHome>
                                    User Home</NavLink>
                                </li>
                                <li><NavLink to="/dashboard/reservation">
                                    <FaCalendar className="text-xl"></FaCalendar>
                                    Reservation ({cart.length})</NavLink>
                                </li>
                                <li><NavLink to="/dashboard/cart">
                                    <FaShoppingCart className="text-xl"></FaShoppingCart>
                                    My Cart ({cart.length})</NavLink>
                                </li>
                                <li><NavLink to="/dashboard/review">
                                    <FaAd className="text-xl"></FaAd>
                                    Add Review</NavLink>
                                </li>
                                <li><NavLink to="/dashboard/bookings">
                                    <FaList className="text-xl"></FaList>
                                    My Bookings</NavLink>
                                </li>
                            </>
                    }

                    {/* shared nav links */}
                    <div className="divider divider-neutral"></div>
                    <li><NavLink to="/">
                        <FaHome className="text-xl"></FaHome>
                        Home</NavLink>
                    </li>
                    <li><NavLink to="/order/salad">
                        <FaSearch className="text-xl"></FaSearch>
                        Our Menu</NavLink>
                    </li>
                    <li><NavLink to="/order/contact">
                        <FaEnvelope className="text-xl"></FaEnvelope>
                        Contact</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;