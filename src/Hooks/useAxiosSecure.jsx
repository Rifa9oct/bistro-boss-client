import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthContext";

const axiosSecure = axios.create({
    baseURL: "http://localhost:5000"
})

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const {logOut} = useContext(AuthContext);
    //request interceptor to add authorization header for every secure call to the api

    axiosSecure.interceptors.request.use(config=>{
        const token = localStorage.getItem("access-token");
        // console.log("request stoped",token);
        config.headers.authorization = `Bearer ${token}`
        return config;
    },error=>{
        //do something with request error
        return Promise.reject(error);
    })

    axiosSecure.interceptors.response.use(response =>{
        return response;
    }, async(error)=>{
        const status = error.response.status;
        // console.log("status error in the interceptor", status)
        if(status === 401 || status === 403){
            await logOut();
            navigate("/signin")
        }
        return Promise.reject(error);
    })

    return axiosSecure;
};

export default useAxiosSecure;