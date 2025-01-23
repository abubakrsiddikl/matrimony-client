import React, { useEffect, useState } from "react";
import SectionTitle from "../../../../components/SectionTitle";
import { useAxiosSecure } from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSppiner from "../../../../components/LoadingSppiner";
import { FaCheckDouble } from "react-icons/fa";
import useAuth from "../../../../hooks/useAuth";
import { IoMdSearch } from "react-icons/io";
import toast from "react-hot-toast";

const ManageUser = () => {
  const [search, setSearch] = useState("");
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users", search],
    queryFn: async () => {
      const { data } = await axiosSecure(`/users/${user?.email}`, {
        params: { searchParams: search || "" },
      });
      return data;
    },
    
  });

  if (isLoading) return <LoadingSppiner></LoadingSppiner>;
  console.log(users);
  const handleMakeAdmin = async (id, name) => {
    const { data } = await axiosSecure.patch(`/user/role/admin/${id}`);
    refetch();
    if (data.modifiedCount) {
      return toast.success(`${name} has been Admin !`);
    }
  };
  const handleMakePremium = async (id, name) => {
    const { data } = await axiosSecure.patch(`/user/role/premium/${id}`);
    refetch();
    if (data.modifiedCount) {
      return toast.success(`${name} has been Premium user !`);
    }
  };
  return (
    <div>
      <SectionTitle heading="Manage All User"></SectionTitle>
      <div className="md:p-7">
        {/* search field */}
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          className="border-2 m-3"
          placeholder="search user (via username)"
        />
        <div className="overflow-x-auto w-full shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto">
            <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-4 py-2">
                  User Name
                </th>
                <th scope="col" className="px-4 py-2">
                  User Email
                </th>
                <th scope="col" className="px-4 py-2">
                  Make Admin
                </th>
                <th scope="col" className="px-4 py-2">
                  Make Premium
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user._id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-4 py-2">{user?.name}</td>
                  <td className="px-4 py-2">{user?.email}</td>
                  <td className="px-4 py-2">
                    {user?.role === "admin" ? (
                      <p className="flex items-center gap-1 text-blue-600">
                        Make Admin<FaCheckDouble></FaCheckDouble>
                      </p>
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user._id, user?.name)}
                        className="text-red-600 hover:bg-blue-500 hover:rounded-lg hover:p-2 hover:text-white hover:font-semibold"
                      >
                        Make Admin
                      </button>
                    )}
                  </td>
                  <td className="px-4 py-2 text-red-500">
                    {user?.role === "premium" ? (
                      <p className="flex items-center gap-1 text-blue-600">
                        Make Premium<FaCheckDouble></FaCheckDouble>
                      </p>
                    ) : (
                      <button
                        onClick={() => handleMakePremium(user._id, user?.name)}
                        className="text-red-600 hover:bg-blue-500 hover:rounded-lg hover:p-2 hover:text-white hover:font-semibold"
                      >
                        Make Premium
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
