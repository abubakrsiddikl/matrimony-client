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
        path: "/biodatas",
        element: <Biodatas></Biodatas>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
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
  // dashboard router
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      // admin router
      // normal user route
      {
        path: "editbiodata",
        element: <EditBiodata></EditBiodata>,
      },
    ],
  },
]);

export default router;
