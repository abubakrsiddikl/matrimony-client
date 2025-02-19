import React, { useState } from "react";
import AdminMenu from "../../components/AdminMenu";
import NormalUserMenu from "../../components/NormalUserMenu";
import { Link, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { CiTextAlignJustify } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import useRole from "../../hooks/useRole";

const Dashboard = () => {
  const { logOut } = useAuth();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { role, isLoading } = useRole();
  const navigate = useNavigate();

  // handle logout
  const handleLogOut = () => {
    logOut();
    toast.success("You are logged out!");
    navigate("/");
  };

  // toggle navigation menu
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen overflow-hidden">
      {/* Left Side Navigation */}
      <div
        className={`bg-[#D1A054] shadow-md p-5 flex flex-col fixed top-0 left-0 h-full min-h-screen z-50 transition-transform duration-300 ${
          isNavOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:flex md:w-1/4 lg:w-1/5 overflow-y-auto`}
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
        {role === "admin" && <AdminMenu handleLogOut={handleLogOut} />}

        {/* Normal User Menu */}
        {(role === "normal" || role === "premium") && (
          <NormalUserMenu handleLogOut={handleLogOut} />
        )}
      </div>

      {/* Toggle Button for Mobile */}
      <button
        onClick={toggleNav}
        className="md:hidden fixed right-5 top-5 z-50 bg-[#D1A054] text-white p-3 rounded-full shadow-md hover:bg-[#b5863e] transition-all"
      >
        {isNavOpen ? (
          <p className="flex justify-center items-center gap-2">
            Close <IoClose />
          </p>
        ) : (
          <p className="flex justify-center items-center gap-2">
            Menu <CiTextAlignJustify />
          </p>
        )}
      </button>

      {/* Right Side Content */}
      <div className="flex-1 overflow-y-auto bg-gray-50 min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
