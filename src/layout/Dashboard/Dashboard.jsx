import React, { useState } from "react";
import AdminMenu from "../../components/AdminMenu";
import NormalUserMenu from "../../components/NormalUserMenu";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { CiTextAlignJustify } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import useRole from "../../hooks/useRole";

const Dashboard = () => {
  const { logOut } = useAuth();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { role, isLoading } = useRole();

  // handle logout
  const handleLogOut = () => {
    logOut();
    toast.success("You are logged out!");
  };

  // toggle navigation menu
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="block lg:flex h-full lg:min-h-screen">
      {/* Left side navigation */}
      <div
        className={`bg-[#D1A054] p-5  flex flex-col fixed top-0 left-0  z-50 transition-transform duration-300 ${
          isNavOpen ? "translate-x-0 " : "-translate-x-full"
        } overflow-auto  md:translate-x-0 md:static md:flex md:w-1/4 lg:w-1/5`}
      >
        {/* Logo */}
        <Link to="/" className="mb-5">
          <img
            src="https://i.ibb.co.com/P1LBP6Y/logo2.jpg"
            className="h-16 w-32"
            alt="placeholder"
          />
        </Link>

        {/* Admin Menu */}
        {role === "admin" && (
          <AdminMenu handleLogOut={handleLogOut}></AdminMenu>
        )}

        {/* Normal User Menu */}
        {role === "normal" && (
          <NormalUserMenu handleLogOut={handleLogOut}></NormalUserMenu>
        )}
      </div>

      {/* Toggle Button for Mobile */}
      <button
        onClick={toggleNav}
        className="md:hidden fixed right-0 top-5  z-50 bg-[#D1A054] text-white p-2 rounded-lg"
      >
        {isNavOpen ? (
          <p className="flex justify-center items-center gap-2">
            Menu <IoClose />
          </p>
        ) : (
          <p className="flex justify-center items-center gap-2">
            Menu
            <CiTextAlignJustify />
          </p>
        )}
      </button>

      {/* Right side content */}
      <div className="flex-1 ">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
