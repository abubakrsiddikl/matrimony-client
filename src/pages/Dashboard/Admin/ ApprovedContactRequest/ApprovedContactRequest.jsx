import React from "react";
import SectionTitle from "../../../../components/SectionTitle";
import { useAxiosSecure } from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSppiner from "../../../../components/LoadingSppiner";
import { FaCheckDouble } from "react-icons/fa";
import toast from "react-hot-toast";

const ApprovedContactRequest = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: request = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["request"],
    queryFn: async () => {
      const { data } = await axiosSecure("/contact-request");
      return data;
    },
  });
  if (isLoading) return <LoadingSppiner></LoadingSppiner>;
  // handle biodata contact
  const handleBiodataRequest = async (email, biodataId) => {
    const { data } = await axiosSecure.patch("/approved-contact/request", {
      email: email,
      biodataId: biodataId,
    });
    refetch();
    if (data.modifiedCount > 0)
      return toast.success(`${biodataId} this biodata has approved !`);
    console.log(data);
  };
  return (
    <div>
      <SectionTitle heading="Approved Contact Request"></SectionTitle>
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
                  Biodata Id
                </th>
                <th scope="col" className="px-4 py-2">
                  Approved contact request
                </th>
              </tr>
            </thead>
            <tbody>
              {request.map((item, idx) => (
                <tr
                  key={idx}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-4 py-2">{item?.name}</td>
                  <td className="px-4 py-2">{item?.email}</td>
                  <td className="px-4 py-2">
                    {item?.status === "Approved" ? (
                      <p className="text-blue-500">Approved</p>
                    ) : (
                      <p className="text-red-700">Pending</p>
                    )}
                  </td>
                  <td className="px-4 py-2 ">{item?.biodataId}</td>
                  <td className=" px-4 py-2">
                    {item?.status === "Approved" ? (
                      <p className="flex  items-center gap-1 text-blue-500 ">
                        Approved<FaCheckDouble></FaCheckDouble>
                      </p>
                    ) : (
                      <>
                        <button
                          className="text-red-700 hover:bg-blue-500 hover:rounded-lg hover:p-2 hover:text-white hover:font-semibold"
                          onClick={() =>
                            handleBiodataRequest(item?.email, item?.biodataId)
                          }
                        >
                          Approved
                        </button>
                      </>
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

export default ApprovedContactRequest;
