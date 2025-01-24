import React from "react";
import { useAxiosSecure } from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../../components/SectionTitle";

const SuccessStoryAdmin = () => {
  const axiosSecure = useAxiosSecure();
  const { data: stories = [] } = useQuery({
    queryKey: ["story"],
    queryFn: async () => {
      const { data } = await axiosSecure("/success-story/admin");
      return data;
    },
  });
  console.log(stories);
  return (
    <div>
      <div className=" overflow-x-auto w-full shadow-md sm:rounded-lg">
        <SectionTitle heading="View Success Stroy"></SectionTitle>
        <div className="mx-3">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-[#E5E7EB] dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Male Biodata Id
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Female Biodata Id
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {stories.map((story) => (
                  <tr
                    key={story._id}
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200"
                  >
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white"
                    >
                      Apple MacBook Pro 17"
                    </td>
                    <td className="px-6 py-4">Silver</td>
                    <td className="px-6 py-4">
                      <button className="bg-[#1C64F2] py-2 px-3 rounded-lg text-white font-semibold">
                        View Story Button
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoryAdmin;
