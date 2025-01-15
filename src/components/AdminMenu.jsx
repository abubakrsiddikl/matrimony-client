import React from "react";
import { Link, NavLink } from "react-router-dom";

const AdminMenu = ({ handleLogOut }) => {
  return (
    <div className="flex flex-col gap-3">
      {/* Admin Dashboard
Manage Users
Approved Premium
Approved Contact Request
Logout (Button)
 */}
      <NavLink to="/dashboard/adminDashboard">Dashboard</NavLink>
      <NavLink to="/dashboard/manageUsers">Manage Users</NavLink>
      <NavLink to="/dashboard/approvedPremium">Approved Premium</NavLink>
      <NavLink to="/dashboard/apporovedContactRequest">
        Approved Contact Request
      </NavLink>
      <Link
        onClick={handleLogOut}
        className="hover:cursor-pointer hover:bg-black hover:text-white hover:p-5 hover:font-bold rounded-lg"
      >
        Logout
      </Link>
    </div>
  );
};

export default AdminMenu;
