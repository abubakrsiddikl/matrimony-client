import React from "react";
import useAuth from "../../../../hooks/useAuth";
import { useAxiosSecure } from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSppiner from "../../../../components/LoadingSppiner";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const MyContactRequest = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: contactInfo = [], isLoading } = useQuery({
    queryKey: ["request"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/myContact-request/${user?.email}`);
      return data;
    },
  });
  if (isLoading) return <LoadingSppiner></LoadingSppiner>;
  // handle delete contact info
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
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
            {contactInfo.map((item, idx) => (
              <tr
                key={idx}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-4 py-2">{item?.contactName}</td>
                <td className="px-4 py-2">{item?.biodataId}</td>
                <td className="px-4 py-2 text-red-700">{item?.status}</td>
                <td className="px-4 py-2 text-blue-500">
                  {item?.status === "Approve" ? (
                    item?.mobileNumber
                  ) : (
                    <p className="text-red-700">Pending</p>
                  )}
                </td>
                <td className="px-4 py-2">
                  {item?.status === "Approve" ? (
                    item?.contactEmail
                  ) : (
                    <p className="text-red-700">Pending</p>
                  )}
                </td>
                <td className="px-4 py-2 text-2xl text-red-500 cursor-pointer">
                  <button onClick={() => handleDelete()}>
                    <MdDelete></MdDelete>
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

export default MyContactRequest;
