import React from "react";
import AdminMenu from "../../components/AdminMenu";
import NormalUserMenu from "../../components/NormalUserMenu";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Dashboard = () => {
  const { logOut } = useAuth();
  // handle logout
  const handleLogOut = () => {
    logOut();
    toast.success("You are logged out !");
  };
  return (
    <div className="flex">
      {/* left side */}
      <div className="bg-[#D1A054] flex flex-col h-screen p-10">
        <Link to="/">
          <img
            src="https://i.ibb.co.com/P1LBP6Y/logo2.jpg"
            className="h-16 w-32 mb-3"
            alt="placholder"
          />
        </Link>
        <AdminMenu handleLogOut={handleLogOut}></AdminMenu>
        <NormalUserMenu handleLogOut={handleLogOut}></NormalUserMenu>
      </div>
      {/* right side */}
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
