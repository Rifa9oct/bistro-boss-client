import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../../Layout/Root";
import Home from "../../Pages/Home/Home";
import SignIn from "../../Pages/Sign in/SignIn";
import Signup from "../../Pages/Sign Up/Signup";
import Menu from "../../Pages/Menu/Menu";
import Order from "../../Pages/Order Food/Order";
import Dashboard from "../../Layout/Dashboard";
import Cart from "../../Pages/Dashboard/Cart";

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
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "cart",
        element: <Cart></Cart>
      },
    ]
  },
]);