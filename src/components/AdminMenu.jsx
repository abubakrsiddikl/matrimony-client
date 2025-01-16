import React from "react";
import { Link, NavLink } from "react-router-dom";

const AdminMenu = ({ handleLogOut }) => {
  return (
    <div className="flex flex-col gap-3">
      
      <NavLink to="/dashboard/adminDashboard">Dashboard</NavLink>
      <NavLink to="/dashboard/manageUsers">Manage Users</NavLink>
      <NavLink to="/dashboard/approvedPremium">Approved Premium</NavLink>
      <NavLink to="/dashboard/apporovedContactRequest">
        Approved Contact Request
      </NavLink>
      <Link
        onClick={handleLogOut}
      >
        Logout
      </Link>
    </div>
  );
};

export default AdminMenu;
