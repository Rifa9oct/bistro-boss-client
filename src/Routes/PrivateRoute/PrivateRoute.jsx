import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from '../../AuthProvider/AuthContext';


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

    return <Navigate to="/signin" state={{from: location}} replace ></Navigate>;
};

PrivateRoute.propTypes ={
    children: PropTypes.node
}

export default PrivateRoute;