import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../../Layout/Root/Root";
import Home from "../../Pages/Home/Home";
import SignIn from "../../Pages/Sign in/SignIn";
import Signup from "../../Pages/Sign Up/Signup";
import Menu from "../../Pages/Menu/Menu";
import Order from "../../Pages/Order Food/Order";

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
    path: "/signin",
    element: <SignIn></SignIn>
  },
  {
    path: "/signup",
    element: <Signup></Signup>
  },

]);