import React, { useState } from "react";
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
    queryKey: ["users", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(
        `/users/${user?.email}?searchParams=${search}`
      );
      return data;
    },
  });
  if (isLoading) return <LoadingSppiner></LoadingSppiner>;

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
        <div className="flex items-center max-w-sm  m-3 ">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                />
              </svg>
            </div>
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="search user (via username)"
            />
          </div>
          <button
            type="submit"
            className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
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
