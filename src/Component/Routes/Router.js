import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Main/Main";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Shop from "../Pages/Shop/Shop";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Signin from "../Pages/Signin/Signin";
import Signup from "../Pages/Signup/Signup";
 
  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/menu",
          element: <Menu></Menu>,
        },
        {
          path: "/shop",
          element: <Shop></Shop>,
        },
        {
          path: "/blog",
          element:<Blog></Blog>,
        },
        {
          path: "/contact",
          element:<Contact></Contact>,
        },
        {
          path: "/signin",
          element:<Signin></Signin>,
        },
        {
          path: "/signup",
          element:<Signup></Signup>,
        },
      ]
    },
  ]);