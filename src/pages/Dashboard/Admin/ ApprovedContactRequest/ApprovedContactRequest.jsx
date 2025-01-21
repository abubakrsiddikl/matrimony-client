import React from "react";
import SectionTitle from "../../../../components/SectionTitle";
import { useAxiosSecure } from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSppiner from "../../../../components/LoadingSppiner";

const ApprovedContactRequest = () => {
  const axiosSecure = useAxiosSecure();
  const { data: request = [], isLoading } = useQuery({
    queryKey: ["request"],
    queryFn: async () => {
      const { data } = await axiosSecure("/contact-request");
      return data;
    },
  });
  if (isLoading) return <LoadingSppiner></LoadingSppiner>;
  
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
                  <td className="px-4 py-2 text-red-500">Approved Contact</td>
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
