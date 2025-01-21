import React from "react";
import SectionTitle from "../../../../components/SectionTitle";
import { useAxiosSecure } from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSppiner from "../../../../components/LoadingSppiner";
import { FaCheckDouble } from "react-icons/fa";
import useAuth from "../../../../hooks/useAuth";

const ManageUser = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: users = [], isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/users/${user?.email}`);
      return data;
    },
  });
  if (isLoading) return <LoadingSppiner></LoadingSppiner>;

  return (
    <div>
      <SectionTitle heading="Manage All User"></SectionTitle>
      <div className="md:p-7">
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
                      <button className="text-red-600 hover:bg-blue-500 hover:rounded-lg hover:p-2 hover:text-white hover:font-semibold">
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
                      <button className="text-red-600 hover:bg-blue-500 hover:rounded-lg hover:p-2 hover:text-white hover:font-semibold">
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
