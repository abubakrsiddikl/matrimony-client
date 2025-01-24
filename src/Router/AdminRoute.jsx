import { Navigate } from "react-router-dom";
import LoadingSppiner from "../components/LoadingSppiner";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { role, isLoading } = useRole();
  if (loading || isLoading) {
    return <LoadingSppiner></LoadingSppiner>;
  }
  if (user && role === "admin") {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default AdminRoute;
