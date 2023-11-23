import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";


const AdminRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    const [isAdmin,isAdminLoading] = useAdmin();
    if(loading || isAdminLoading){
        return (
            <div className="flex justify-center items-center mt-28">
                <span className="loading loading-spinner text-primary loading-md"></span>
            </div>
        )
    }
    if(user && isAdmin){
        return children;
    }

    return <Navigate to="/signin" state={{from: location}} replace ></Navigate>;
};

export default AdminRoute;