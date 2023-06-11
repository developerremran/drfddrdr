import { createBrowserRouter } from "react-router-dom";
import MainHomeLayout from "../Layouts/MainHomeLayout";
import Home from "../Pages/Home";
import ContactUs from "../Pages/ContactUs";
import Dashboard from "../Pages/Dashboard";
import OurMenu from "../Pages/OurMenu";
import OurShop from "../Pages/OurShop";
import Register from "../Pages/Register";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainHomeLayout></MainHomeLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/contact-us',
                element:<ContactUs></ContactUs>
            },
            {
                path:'/dashboard',
                element:<Dashboard></Dashboard>
            },
            {
                path:'/our-menu',
                element:<OurMenu></OurMenu>
            },
            {
                path:'/our-shop/:category',
                element:<OurShop></OurShop>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
        ]
    }
])





