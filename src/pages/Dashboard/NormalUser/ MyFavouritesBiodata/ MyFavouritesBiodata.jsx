import React from "react";

const MyFavouritesBiodata = () => {
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
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-4 py-2">John Doe</td>
              <td className="px-4 py-2">BD1234</td>
              <td className="px-4 py-2">Dhaka, Bangladesh</td>
              <td className="px-4 py-2">Engineer</td>
              <td className="px-4 py-2">
                <button className="text-blue-600 dark:text-blue-400 hover:underline">
                  Edit
                </button>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-4 py-2">Jane Smith</td>
              <td className="px-4 py-2">BD5678</td>
              <td className="px-4 py-2">Chittagong, Bangladesh</td>
              <td className="px-4 py-2">Doctor</td>
              <td className="px-4 py-2">
                <button className="text-blue-600 dark:text-blue-400 hover:underline">
                  Edit
                </button>
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <td className="px-4 py-2">Alice Brown</td>
              <td className="px-4 py-2">BD7890</td>
              <td className="px-4 py-2">Sylhet, Bangladesh</td>
              <td className="px-4 py-2">Teacher</td>
              <td className="px-4 py-2">
                <button className="text-blue-600 dark:text-blue-400 hover:underline">
                  Edit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyFavouritesBiodata;
