import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://matrimony-final-server.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
