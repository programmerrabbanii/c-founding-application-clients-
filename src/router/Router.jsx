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
import PrivateRouter from "../private/PrivateRouter";
import Update from "../pages/Update";
import AboutPage from "../components/AboutPage";
import SupportPage from "../components/SupportPage";
import Contac from "../components/Contac";

const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPages></ErrorPages>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=> fetch('https://assignment-ten-server-tawny-pi.vercel.app/crowds')

            }, 
            {
                path:"/about",
                element:<AboutPage></AboutPage>
            },
            {
                path:"/support",
                element:<SupportPage></SupportPage>

            },
            {
                path:"/contact",
                element:<Contac></Contac>
            },
            {
                path:'/mycampaing',
                element:<PrivateRouter><MyCampaign></MyCampaign></PrivateRouter>
            },
            {
                path:'/allcampaing',
                element:<AllCampaign></AllCampaign>,
                loader:()=>fetch('https://assignment-ten-server-tawny-pi.vercel.app/allCrowds')
            },
            {
                path:'/mydonation',
                element:<PrivateRouter><MyDonations></MyDonations></PrivateRouter>,
                
            }, 
            {
                path:'/addnewcampaing',
                element:<PrivateRouter><AddNewCampaign></AddNewCampaign></PrivateRouter>
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
                loader:({params})=>fetch(`https://assignment-ten-server-tawny-pi.vercel.app/crowds/${params.id}`)
            },
            {
                path:"/update/:id",
                element:<Update></Update>,
                loader:({params})=> fetch(`https://assignment-ten-server-tawny-pi.vercel.app/crowds/${params.id}`)
            }
        ]
    }
])
export default router