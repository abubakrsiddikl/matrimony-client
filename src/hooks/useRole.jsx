import React from "react";
import { useAxiosSecure } from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
const useRole = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: role = {}, isLoading } = useQuery({
    queryKey: ["role", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async (req, res) => {
      const { data } = await axiosSecure(`/users/role/${user?.email}`);
      return data.role;
    },
  });

  return { role, isLoading };
};

export default useRole;
