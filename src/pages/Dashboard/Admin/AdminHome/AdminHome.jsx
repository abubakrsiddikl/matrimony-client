import React from "react";
import { FaDatabase, FaFemale, FaMale } from "react-icons/fa";
import { MdWorkspacePremium } from "react-icons/md";
import { FaSackDollar } from "react-icons/fa6";


const AdminHome = () => {
  return (
    <div className="my-9 mx-5">
      <h1 className="uppercase text-2xl font-semibold">Hi welcom back</h1>
      <div className="grid md:grid-cols-3 gap-3">
        {/* total biodata cart */}
        <div className=" flex justify-center items-center gap-3 bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] px-10 py-4 text-center rounded-md text-white">
          <p>
            <FaDatabase className="text-2xl "></FaDatabase>
          </p>
          <div>
            <p className="text-3xl font-bold">1000</p>
            <p className="text-2xl"> Biodata</p>
          </div>
        </div>
        {/* male biodata cart */}
        <div className="flex justify-center items-center gap-3 bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] px-3 py-4 text-center rounded-md text-white">
          <p>
            <FaMale className="text-3xl"></FaMale>
          </p>
          <div>
            <p className="text-3xl font-bold">900</p>
            <p className="text-2xl">Male Biodata</p>
          </div>
        </div>
        {/* femalemale biodata cart */}
        <div className=" flex justify-center items-center gap-2 bg-gradient-to-r from-[#FE4880] to-[#FECDE9] px-3 py-4 text-center rounded-md text-white">
          <p>
            <FaFemale className="text-3xl"></FaFemale>
          </p>
          <div>
            <p className="text-3xl font-bold">900</p>
            <p className="text-2xl">Female Biodata</p>
          </div>
        </div>
        {/* premium biodata cart */}
        <div className=" flex justify-center items-center gap-2 bg-gradient-to-r from-[#6AAEFF] to-[#6AAEFF] px-3 py-4 text-center rounded-md text-white">
          <p>
            <MdWorkspacePremium className="text-3xl" />
          </p>
          <div>
            <p className="text-3xl font-bold">900</p>
            <p className="text-2xl">Premium Biodata</p>
          </div>
        </div>
        {/* rvenue biodata cart */}
        <div className=" flex justify-center items-center gap-3 bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] px-10 py-4 text-center rounded-md text-white">
          <p>
            <FaSackDollar className="text-2xl " />
          </p>
          <div>
            <p className="text-3xl font-bold">1000</p>
            <p className="text-2xl"> Revenue</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
