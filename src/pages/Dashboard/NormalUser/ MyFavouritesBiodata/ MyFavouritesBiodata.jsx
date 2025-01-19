import React from "react";
import { useAxiosSecure } from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import { MdDelete } from "react-icons/md";

const MyFavouritesBiodata = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: biodata = [] } = useQuery({
    queryKey: ["biodata", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/favourites-biodata/${user?.email}`);
      return data;
    },
  });
  // handle delete biodata
  const handleDelete = (id) => {
    console.log(id)
  };
  return (
    <div className="md:p-7">
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-2">
                Name
              </th>
              <th scope="col" className="px-4 py-2">
                Biodata ID
              </th>
              <th scope="col" className="px-4 py-2">
                Permanent Address
              </th>
              <th scope="col" className="px-4 py-2">
                Occupation
              </th>
              <th scope="col" className="px-4 py-2">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {biodata.map((item) => (
              <tr
                key={item._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-4 py-2">{item?.name}</td>
                <td className="px-4 py-2">{item?.biodataId}</td>
                <td className="px-4 py-2">{item?.permanentAddress}</td>
                <td className="px-4 py-2">{item?.occupation}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="text-red-600  text-xl"
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyFavouritesBiodata;
