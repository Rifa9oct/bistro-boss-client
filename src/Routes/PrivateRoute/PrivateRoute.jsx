import { useContext } from "react";
import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return (
            <div className="flex justify-center items-center mt-28">
                <span className="loading loading-spinner text-primary loading-md"></span>
            </div>
        )
    }
    if(user){
        return children;
    }

    return <Navigate state={{form: location}} replace to="/signin"></Navigate>;
};

PrivateRoute.propTypes ={
    children: PropTypes.node
}

export default PrivateRoute;