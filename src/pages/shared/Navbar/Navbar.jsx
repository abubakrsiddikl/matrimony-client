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
  console.log(user)
  const links = (
    <ul className="flex flex-col lg:flex-row justify-center items-center gap-5 text-blue-900 lg:static lg:flex">
      <li>
        <NavLink to="/" className="hover:text-blue-600">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/biodatas" className="hover:text-blue-600">
          Biodatas
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className="hover:text-blue-600">
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className="hover:text-blue-600">
          Contact Us
        </NavLink>
      </li>
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

      {/* Hamburger Menu Icon for Small Screens */}
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

      {/* Dropdown Menu for Small Screens */}
      {dropdown && (
        <div className="absolute top-14 right-0 w-full bg-red-600 lg:hidden">
          {links}
          <Button
            variant="contained"
            color="primary"
            className="mt-4"
            onClick={() => setDropdown(false)} // Close the dropdown on login click
          >
            Login
          </Button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
