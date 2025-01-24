import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import ContactUs from "../pages/ContactUs/ContactUs";
import Login from "./Login/Login";
import Register from "../pages/Register/Register";
import Biodatas from "../pages/Biodatas/Biodatas";
import Dashboard from "../layout/Dashboard/Dashboard";
import EditBiodata from "../pages/Dashboard/NormalUser/EditBiodata/EditBiodata";
import PrivateRoute from "./PrivateRoute";
import ViewBiodata from "../pages/Dashboard/NormalUser/ViewBiodata/ViewBiodata";
import MyFavouritesBiodata from "../pages/Dashboard/NormalUser/ MyFavouritesBiodata/ MyFavouritesBiodata";
import MyContactRequest from "../pages/Dashboard/NormalUser/MyContactRequest/MyContactRequest";
import AdminHome from "../pages/Dashboard/Admin/AdminHome/AdminHome";
import ManageUser from "../pages/Dashboard/Admin/ManageUser/ManageUser";
import ApprovedPremium from "../pages/Dashboard/Admin/ApprovedPremium/ApprovedPremium";
import ApprovedContactRequest from "../pages/Dashboard/Admin/ ApprovedContactRequest/ApprovedContactRequest";
import BiodataDetails from "../pages/BiodataDetails/BiodataDetails";
import Payment from "../pages/Dashboard/NormalUser/Payment/Payment";
import AboutUs from "../pages/AboutUs/AboutUs";
import GotMarried from "../pages/Dashboard/NormalUser/GotMarried/GotMarried";
import AdminRoute from "./AdminRoute";
import UserRoute from "./UserRoute";
import SuccessStoryAdmin from "../pages/Dashboard/Admin/SuccessStroyAdmin/SuccessStoryAdmin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/biodata",
        element: <Biodatas></Biodatas>,
      },
      {
        path: "biodata/details/:id",
        element: (
          <PrivateRoute>
            <BiodataDetails></BiodataDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/biodata/details/${params.id}`),
      },
      {
        path: "/payment/:id",
        element: (
          <PrivateRoute>
            <Payment></Payment>
          </PrivateRoute>
        ),
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  // dashboard route
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      // admin router
      {
        path: "adminDashboard",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "manage",
        element: (
          <AdminRoute>
            <ManageUser></ManageUser>
          </AdminRoute>
        ),
      },
      {
        path: "approvedPremium",
        element: (
          <AdminRoute>
            <ApprovedPremium></ApprovedPremium>
          </AdminRoute>
        ),
      },
      {
        path: "apporovedContactRequest",
        element: (
          <AdminRoute>
            <ApprovedContactRequest></ApprovedContactRequest>
          </AdminRoute>
        ),
      },
      {
        path: "successStoryAdmin",
        element: (
          <AdminRoute>
            <SuccessStoryAdmin></SuccessStoryAdmin>
          </AdminRoute>
        ),
      },
      // normal user route
      {
        path: "editBiodata",
        element: (
          <UserRoute>
            <EditBiodata></EditBiodata>
          </UserRoute>
        ),
      },
      {
        path: "viewBiodata",
        element: (
          <UserRoute>
            <ViewBiodata></ViewBiodata>
          </UserRoute>
        ),
      },
      {
        path: "myContactRequest",
        element: (
          <UserRoute>
            <MyContactRequest></MyContactRequest>
          </UserRoute>
        ),
      },
      {
        path: "favouritesBiodata",
        element: (
          <UserRoute>
            <MyFavouritesBiodata></MyFavouritesBiodata>
          </UserRoute>
        ),
      },
      {
        path: "gotMarried",
        element: (
          <UserRoute>
            <GotMarried></GotMarried>
          </UserRoute>
        ),
      },
    ],
  },
]);

export default router;
