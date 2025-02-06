import axios from "axios";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: "https://matrimony-final-server.vercel.app",
  withCredentials: true,
});

export const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      async (error) => {
        // console.log("Error caught from axios interceptor", error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          // logout
          logOut();
          // navigate to login
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, [logOut, navigate]);
  return axiosSecure;
};
