import PremiumCard from "../../components/PremiumCard";
import SectionTitle from "../../components/SectionTitle";


const BannerPremiumCards = () => {
  const handlSort = (order) => {
     console.log(order)
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
      <PremiumCard></PremiumCard>
    </div>
  );
};

export default BannerPremiumCards;
