import React from "react";
import SectionTitle from "../../../../components/SectionTitle";
import { useAxiosSecure } from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSppiner from "../../../../components/LoadingSppiner";
import { MdVerified } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa";
import useAuth from "../../../../hooks/useAuth";
import toast from "react-hot-toast";

const ApprovedPremium = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    data: premiumData = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["request"],
    queryFn: async () => {
      const { data } = await axiosSecure("/biodata-premium/request");
      return data;
    },
  });

  if (isLoading) return <LoadingSppiner></LoadingSppiner>;
  // handle make premium to biodata
  const handleMakePremium = async (id, name) => {
    console.log(id);
    const { data } = await axiosSecure.patch(
      `/biodata-premium/approved/${user?.email}`,
      {
        id: id,
      }
    );
    refetch();
    if (data.modifiedCount) {
      toast.success(`${name} This user biodata has been premium !`);
    }
  };
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
              {premiumData.map((item) => (
                <tr
                  key={item._id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-4 py-2">{item?.name}</td>
                  <td className="px-4 py-2">{item?.email}</td>
                  <td className="px-4 py-2 text-red-700">
                    {/* validation check data is premium or not  */}
                    {item?.status === "Verified" ? (
                      <p className="text-blue-600 flex justify-center items-center gap-1">
                        <MdVerified />
                        Verified
                      </p>
                    ) : (
                      item?.status
                    )}
                  </td>
                  <td>
                    {item?.isPremium === "premium" ? (
                      <p className="px-4 py-2 text-blue-500 flex gap-1 items-center ">
                        Make Premium <FaCheckDouble></FaCheckDouble>
                      </p>
                    ) : (
                      <button
                        onClick={() => handleMakePremium(item?._id, item?.name)}
                        className="px-4 py-2 text-red-500 hover:bg-blue-400 hover:text-black hover:rounded-lg"
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

export default ApprovedPremium;
