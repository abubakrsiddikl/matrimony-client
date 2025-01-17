import React from "react";

const MyContactRequest = () => {
  return (
    <div className="md:p-7">
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        {/*  */}
        <table className="table table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-2">
                Name
              </th>
              <th scope="col" className="px-4 py-2">
                Biodata ID
              </th>
              <th scope="col" className="px-4 py-2">
                Status
              </th>
              <th scope="col" className="px-4 py-2">
                Mobile No
              </th>
              <th scope="col" className="px-4 py-2">
                Email
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
              <td className="px-4 py-2">limonsk026@gmail.com</td>
              <td className="px-4 py-2 text-red-500">delet</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyContactRequest;
