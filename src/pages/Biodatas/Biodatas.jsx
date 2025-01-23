import React, { useState } from "react";
import BiodatasFilter from "../../components/BiodatasFilter";
import PremiumCard from "../../components/PremiumCard";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Biodatas = () => {
  const [age, setAge] = useState("");
  const [biodataType, setBiodataType] = useState("");
  const [permanentDivision, setPermanentDivision] = useState("");
  const axiosPublic = useAxiosPublic();
  const { data: biodatas = [] } = useQuery({
    queryKey: ["biodata", age, biodataType, permanentDivision],
    queryFn: async () => {
      const { data } = await axiosPublic("/biodata", {
        params: {
          age: age || "",
          biodataType: biodataType || "",
          permanentDivision: permanentDivision || "",
        },
      });
      return data;
    },
  });
  
  return (
    <section className=" flex flex-col lg:flex-row gap-5">
      {/* left sider filter options */}
      <div className="lg:w-1/4 ">
        <BiodatasFilter
          setAge={setAge}
          setBiodataType={setBiodataType}
          setPermanentDivision={setPermanentDivision}
        ></BiodatasFilter>
      </div>

      {/* write side biodatas card */}
      <div className="w-11/12 mx-auto lg:w-full grid grid-cols-1 my-10 md:grid-cols-2 gap-3">
        {biodatas.map((biodata) => (
          <PremiumCard key={biodata._id} biodata={biodata}></PremiumCard>
        ))}
      </div>
    </section>
  );
};

export default Biodatas;
