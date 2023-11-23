import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../../Layout/Root";
import Home from "../../Pages/Home/Home";
import SignIn from "../../Pages/Sign in/SignIn";
import Signup from "../../Pages/Sign Up/SignUp";
import Menu from "../../Pages/Menu/Menu";
import Order from "../../Pages/Order Food/Order";
import Dashboard from "../../Layout/Dashboard";
import Cart from "../../Pages/Dashboard/Cart";
import PrivateRoute from "../../Routes/PrivateRoute/PrivateRoute"
import AllUsers from "../../Pages/Dashboard/AllUsers";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>
      },
      {
        path: "/signup",
        element: <Signup></Signup>
      },
      {
        path: "/menu",
        element: <Menu></Menu>
      },
      {
        path: "/order/:category",
        element: <Order></Order>
      },
    ]
  },
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: "cart",
        element: <Cart></Cart>
      },

      //admin routes
      {
        path: "users",
        element: <AllUsers></AllUsers>
      },
    ]
  },
]);