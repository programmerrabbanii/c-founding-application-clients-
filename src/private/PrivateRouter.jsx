import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    if(loading){
        <span className="loading loading-spinner text-error"></span>

    }
    
    if(user){
        return children
    }
    
    return (
        <Navigate to="/login"></Navigate>
    );
};

export default PrivateRouter;