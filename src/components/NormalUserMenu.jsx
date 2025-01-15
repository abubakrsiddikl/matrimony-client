import { Link, NavLink } from "react-router-dom";

const NormalUserMenu = ({ handleLogOut }) => {
  return (
    <div className="flex flex-col gap-3">
      {/* Edit Biodata.
View Biodata (See the biodata info).
My Contact Request.
Favourites Biodata.
Logout (Button)
 */}
      <NavLink to="/dashboard/editBiodata">Edit Biodata</NavLink>
      <NavLink to="/dashboard/viewBiodata">View Biodata</NavLink>
      <NavLink to="/dashboard/myContactRequest">My Contact Request</NavLink>
      <NavLink to="/dashboard/favouritesBiodata">Favourites Biodata</NavLink>
      <Link
        onClick={handleLogOut}
        className="hover:cursor-pointer hover:bg-black hover:text-white hover:p-5 hover:font-bold rounded-lg"
      >
        Logout
      </Link>
    </div>
  );
};

export default NormalUserMenu;
