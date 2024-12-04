import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Banner from "../components/Bannar";

const MainLayout = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Banner></Banner>
           <Outlet></Outlet>
            
        </div>
    );
};

export default MainLayout;