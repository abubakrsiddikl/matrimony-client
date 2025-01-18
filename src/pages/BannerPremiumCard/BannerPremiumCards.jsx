import { useQuery } from "@tanstack/react-query";
import PremiumCard from "../../components/PremiumCard";
import SectionTitle from "../../components/SectionTitle";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const BannerPremiumCards = () => {
  const axiosPublic = useAxiosPublic();
  const { data: biodatas = [] } = useQuery({
    queryKey: ["biodata"],
    queryFn: async () => {
      const { data } = await axiosPublic("/biodata");
      return data;
    },
  });
  // handle age short
  const handlSort = (order) => {
    console.log(order);
    // const sortedData = [...data].sort((a, b) =>
    //   order === "asc" ? a.age - b.age : b.age - a.age
    // );
  };
  return (
    <div>
      <SectionTitle heading="Biodata Premium "></SectionTitle>
      <p className="text-2xl font-bold  mt-3">
        Sort By Age :
        <select className="ml-3" onChange={(e) => handlSort(e.target.value)}>
          <option value="asc">Min Age to Max Age</option>
          <option value="desc">Max Age to Min Age</option>
        </select>
      </p>
      {/* card design */}
      <div className="w-11/12 mx-auto grid grid-cols-1 my-10 md:grid-cols-2 gap-3">
        {biodatas.map((biodata) => (
          <PremiumCard key={biodata._id} biodata={biodata}></PremiumCard>
        ))}
      </div>
    </div>
  );
};

export default BannerPremiumCards;
