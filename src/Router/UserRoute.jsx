import { Navigate } from "react-router-dom";
import LoadingSppiner from "../components/LoadingSppiner";
import useRole from "../hooks/useRole";

const UserRoute = ({ children }) => {
  const { role, isLoading } = useRole();
  if (isLoading) {
    return <LoadingSppiner></LoadingSppiner>;
  }
  if (role === "normal" || role === "premium") {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default UserRoute;
