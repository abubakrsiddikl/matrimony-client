import { useQuery } from "@tanstack/react-query";
import PremiumCard from "../../components/PremiumCard";
import SectionTitle from "../../components/SectionTitle";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useEffect, useMemo, useState } from "react";

const BannerPremiumCards = () => {
  const axiosPublic = useAxiosPublic();
  const limit = 6;

  const { data: biodatas = [] } = useQuery({
    queryKey: ["biodata", limit],
    queryFn: async () => {
      const { data } = await axiosPublic(`/biodata?limit=${limit}`);
      return data;
    },
  });

  const defaultSortedData = useMemo(
    () => [...biodatas].sort((a, b) => a.age - b.age),
    [biodatas]
  );

  const [sortedBiodatas, setSortedBiodatas] = useState(defaultSortedData);

  useEffect(() => {
    setSortedBiodatas(defaultSortedData);
  }, [defaultSortedData]);

  const handleSort = (order) => {
    const sortedData = [...defaultSortedData].sort((a, b) =>
      order === "asc" ? a.age - b.age : b.age - a.age
    );
    setSortedBiodatas(sortedData);
  };
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="mt-7 mb-5 text-3xl text-center font-bold">Biodata Premium</h1>
      <p className="text-2xl font-bold  mt-3">
        Sort By Age :
        <select className="ml-3" onChange={(e) => handleSort(e.target.value)}>
          <option value="asc">Min Age to Max Age</option>
          <option value="desc">Max Age to Min Age</option>
        </select>
      </p>
      {/* card design */}
      <div className=" grid grid-cols-1 my-10 md:grid-cols-2 gap-3">
        {sortedBiodatas.map((biodata) => (
          <PremiumCard key={biodata._id} biodata={biodata}></PremiumCard>
        ))}
      </div>
    </div>
  );
};

export default BannerPremiumCards;
