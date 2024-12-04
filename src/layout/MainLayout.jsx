import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Banner from "../components/Bannar";
import Footer from "../pages/Footer";

const MainLayout = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Banner></Banner>
           <Outlet></Outlet>
           <Footer></Footer>
           
            
        </div>
    );
};

export default MainLayout;