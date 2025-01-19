import { Link, NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import { useState } from "react";
import { TfiLayoutMenuV } from "react-icons/tfi";
import { VscMenu } from "react-icons/vsc";
import logo from "../../../assets/logo2.jpeg";
import "./Navbar.css";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const { logOut, user } = useAuth();
  // handle logOut
  const handleLogOut = () => {
    logOut();
    toast.success("Logout successfull !");
  };

  const links = (
    <ul className="flex flex-col lg:flex-row justify-center items-center gap-5 text-blue-900 lg:static lg:flex">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/biodata">Biodatas</NavLink>
      </li>
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
      <li>{user && <NavLink to="/dashboard">Dashboard</NavLink>}</li>
    </ul>
  );

  return (
    <div className="mt-6 flex justify-between items-center px-4 lg:px-10">
      <div className="flex justify-center items-center gap-3 text-2xl font-bold text-blue-900">
        <img src={logo} className="w-10 h-10" alt="" />
        <p>Life Union</p>
      </div>

      {/* link hidden on small screens */}
      <div className="hidden lg:flex">{links}</div>

      {/* Login Button */}
      <div className="hidden lg:block">
        {user ? (
          <Button onClick={handleLogOut} variant="contained" color="primary">
            Log Out
          </Button>
        ) : (
          <NavLink to="/login">
            <Button variant="contained" color="primary">
              Login
            </Button>
          </NavLink>
        )}
      </div>

      {/* icon md divice */}
      <div className="lg:hidden">
        <button
          onClick={() => setDropdown(!dropdown)}
          className="text-blue-900 focus:outline-none"
        >
          {dropdown ? (
            <TfiLayoutMenuV className="text-2xl" />
          ) : (
            <VscMenu className="text-2xl" />
          )}
        </button>
      </div>

      {/* dropdown mobile divice */}
      {dropdown && (
        <div className="z-50 py-3 absolute top-14 right-0 w-full bg-[#D1A054] lg:hidden">
          {links}
        </div>
      )}
    </div>
  );
};

export default Navbar;
