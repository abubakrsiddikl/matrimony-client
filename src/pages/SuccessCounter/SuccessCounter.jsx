import React from "react";
import CountUp from "react-countup";
import SectionTitle from "../../components/SectionTitle";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import LoadingSppiner from "../../components/LoadingSppiner";

const SuccessCounter = () => {
  const axiosPublic = useAxiosPublic();
  const { data: counte = {}, isLoading } = useQuery({
    queryKey: ["count"],
    queryFn: async () => {
      const { data } = await axiosPublic("/users-stats");
      return data;
    },
  });
  if (isLoading) return <LoadingSppiner></LoadingSppiner>;
  return (
    <section className="bg-gray-100 py-12">
      <div className="w-11/12 mx-auto  text-center">
        <SectionTitle heading="Success Counter"></SectionTitle>
        <p className="text-gray-600 mb-8">
          See how many have joined, matched, and found their perfect partner
          through us!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Total Biodata */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-4xl font-extrabold text-indigo-600">
              <CountUp start={0} end={counte?.totalBiodata} duration={3} />+
            </h3>
            <p className="text-gray-700 mt-2">Total Biodata</p>
          </div>

          {/* Girls Biodata */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-4xl font-extrabold text-pink-600">
              <CountUp start={0} end={counte?.totalGirlsBiodata} duration={3} />
              +
            </h3>
            <p className="text-gray-700 mt-2">Girls Biodata</p>
          </div>

          {/* Boys Biodata */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-4xl font-extrabold text-blue-600">
              <CountUp start={0} end={counte?.totalBoysBiodata} duration={3} />+
            </h3>
            <p className="text-gray-700 mt-2">Boys Biodata</p>
          </div>

          {/* Total Marriages */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-4xl font-extrabold text-green-600">
              <CountUp
                start={0}
                end={counte?.totalMarrigeComplete}
                duration={3}
              />
              +
            </h3>
            <p className="text-gray-700 mt-2">Marriages Completed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessCounter;
