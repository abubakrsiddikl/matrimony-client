import React, { useContext } from "react";
import { AuthContext } from "../provider/Auth/AuthProvider";

const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default useAuth;
