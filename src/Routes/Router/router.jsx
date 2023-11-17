import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../../Root/Root";
import Home from "../../Pages/Home/Home";
import SignIn from "../../Pages/Sign in/SignIn";
import Signup from "../../Pages/Sign Up/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
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