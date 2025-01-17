import React from "react";
import SectionTitle from "../../../../components/SectionTitle";

const ManageUser = () => {
  return (
    <div>
      <SectionTitle heading="Manage All User"></SectionTitle>
      <div className="md:p-7">
        <div className="overflow-x-auto w-full shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto">
            <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {/* User name
User email
Make admin
Make premium
 */}
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
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-4 py-2">John Doe</td>
                <td className="px-4 py-2">limonsk026@gmail.com</td>
                
                <td className="px-4 py-2">Make Admin</td>
                <td className="px-4 py-2 text-red-500">Make Premium</td>
              </tr>
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
