import { Navigate } from "react-router-dom";
import LoadingSppiner from "../components/LoadingSppiner";
import useAuth from "../hooks/useAuth";


const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    if (loading) {
      return <LoadingSppiner></LoadingSppiner>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;