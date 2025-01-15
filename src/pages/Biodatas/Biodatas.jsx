import React from "react";
import BiodatasFilter from "../../components/BiodatasFilter";
import PremiumCard from "../../components/PremiumCard";

const Biodatas = () => {
  return (
    <section className=" flex flex-col lg:flex-row gap-5">
      {/* left sider filter options */}
      <div className="lg:w-1/4 ">
        <BiodatasFilter></BiodatasFilter>
      </div>

      {/* write side biodatas card */}
      <div className="w-11/12 mx-auto lg:w-full">
        <PremiumCard></PremiumCard>
      </div>
    </section>
  );
};

export default Biodatas;
