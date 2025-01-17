import React from "react";
import SectionTitle from "../../../../components/SectionTitle";

const ApprovedPremium = () => {
  return (
    <div>
      <SectionTitle heading="Approved Premium"></SectionTitle>
      <div className="md:px-7">
        <div className="overflow-x-auto w-full shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto">
            <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-4 py-2">
                  Name
                </th>
                <th scope="col" className="px-4 py-2">
                  Email
                </th>
                <th scope="col" className="px-4 py-2">
                  Status
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
                <td className="px-4 py-2">Requested</td>
                <td className="px-4 py-2 text-red-500">Make Premium</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ApprovedPremium;
