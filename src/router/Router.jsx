import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPages from "../pages/ErrorPages";
import Home from "../pages/Home";
import MyCampaign from "../pages/MyCampaign";
import AllCampaign from "../pages/AllCampaign";
import MyDonations from "../pages/MyDonations";
import AddNewCampaign from "../pages/AddNewCampaign";
import Register from "../pages/Register";
import Login from "../pages/Login";
import SeeMore from "../pages/SeeMore";

const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPages></ErrorPages>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=> fetch('http://localhost:5000/crowds')

            },
            {
                path:'/mycampaing',
                element:<MyCampaign></MyCampaign>
            },
            {
                path:'/allcampaing',
                element:<AllCampaign></AllCampaign>,
                loader:()=>fetch('http://localhost:5000/allCrowds')
            },
            {
                path:'/mydonation',
                element:<MyDonations></MyDonations>,
                
            },
            {
                path:'/addnewcampaing',
                element:<AddNewCampaign></AddNewCampaign>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:"/seemore/:id",
                element:<SeeMore></SeeMore>,
                loader:({params})=>fetch(`http://localhost:5000/crowds/${params.id}`)
            }
        ]
    }
])
export default router