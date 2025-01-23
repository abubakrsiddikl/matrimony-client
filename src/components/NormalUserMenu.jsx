import { Link, NavLink } from "react-router-dom";

const NormalUserMenu = ({ handleLogOut }) => {
  return (
    <div className="flex flex-col gap-3">
      <NavLink to="/dashboard/editBiodata">Edit Biodata</NavLink>
      <NavLink to="/dashboard/viewBiodata">View Biodata</NavLink>
      <NavLink to="/dashboard/myContactRequest">My Contact Request</NavLink>
      <NavLink to="/dashboard/favouritesBiodata">Favourites Biodata</NavLink>
      <NavLink to="/dashboard/gotMarried">Got Married</NavLink>
      <Link
        onClick={handleLogOut}
        className="hover:cursor-pointer hover:bg-black hover:text-white hover:p-2 hover:font-bold rounded-lg"
      >
        Logout
      </Link>
    </div>
  );
};

export default NormalUserMenu;
