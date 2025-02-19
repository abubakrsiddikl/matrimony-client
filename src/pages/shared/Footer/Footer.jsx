import React from "react";
import logo from "../../../assets/logo2.jpeg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#111827] shadow dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Life Union
            </span>
          </p>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 ">
            <li>
              <Link to="/about" className="hover:underline hover:cursor-pointer me-4 md:me-6">About</Link>
            </li>
            <li>
              <p className="hover:underline hover:cursor-pointer me-4 md:me-6">Privacy Policy</p>
            </li>
            <li>
              <p className="hover:underline hover:cursor-pointer me-4 md:me-6">Licensing</p>
            </li>
            <li>
              <Link to="/contact" className="hover:underline hover:cursor-pointer">Contact</Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-white sm:text-center ">
          © 2027
          <a  className="hover:underline hover:cursor-pointer">
            Life Union™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
