import React from "react";
import { Link, NavLink } from "react-router-dom";

const AdminMenu = ({ handleLogOut }) => {
  return (
    <div className="flex flex-col gap-3">
      <NavLink to="/dashboard/adminDashboard">Dashboard</NavLink>
      <NavLink to="/dashboard/manage">Manage Users</NavLink>
      <NavLink to="/dashboard/approvedPremium">Approved Premium</NavLink>
      <NavLink to="/dashboard/apporovedContactRequest">
        Approved Contact Request
      </NavLink>
      <NavLink to="/dashboard/successStoryAdmin">Success Story</NavLink>
      <NavLink to="/dashboard/profile">Profile</NavLink>
      <Link onClick={handleLogOut}>Logout</Link>
    </div>
  );
};

export default AdminMenu;
