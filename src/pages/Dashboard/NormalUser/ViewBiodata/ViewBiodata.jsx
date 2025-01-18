import React from "react";
import { useAxiosSecure } from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";

const ViewBiodata = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: biodata = {} } = useQuery({
    queryKey: ["biodata", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/biodata/${user?.email}`);
      return data;
    },
  });
  console.log(biodata);
  // handle make premium button
  const handleMakePremium = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "If are you sure to make you premium",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "success!",
          text: "Your request has been sent to admin.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="bg-[#F2F2F2] py-10">
      <div className=" flex flex-col items-center gap-5 md:flex-row md:justify-start md:items-center md:px-20">
        {/* Profile Picture */}
        <img
          src="https://i.ibb.co/SRJ5dPV/myprofile.jpg"
          className="w-36 h-36  shadow-lg"
          alt="Profile"
        />
        {/* Name and ID */}
        <div className="text-center md:text-left">
          <p className="text-2xl font-bold text-gray-800">
            Name: <span className="text-gray-500">Md Limon</span>
          </p>
          <p className="text-xl font-medium text-gray-700">ID: 01234</p>
          <p className="text-xl font-medium text-gray-700">
            Biodata Type: {biodata.biodataType}
          </p>
          <button
            onClick={handleMakePremium}
            className="bg-[#5850EC] rounded-lg py-3 px-4 text-white font-bold mt-2"
          >
            Make Biodata to Premium
          </button>
        </div>
      </div>

      {/* Biodata Details */}
      <div className="grid grid-cols-1 gap-6 mt-10 px-5 md:px-20">
        {/* Personal details card */}
        <div className="w-full bg-white shadow-lg px-8 py-5 rounded-lg">
          <h1 className="text-2xl text-center">Personal Details</h1>
          <hr />
          <p className="text-xl text-gray-800">
            <strong className="font-semibold">Name:</strong> {biodata.name}
          </p>
          <p className="text-lg text-gray-800">
            <strong className="font-semibold">Date of Birth:</strong>
            {biodata.dateOfBirth}
          </p>
          <p className="text-lg text-gray-800">
            <strong className="font-semibold">Height:</strong> {biodata.height}
          </p>
          <p className="text-lg text-gray-800">
            <strong className="font-semibold">Weight:</strong> {biodata.weight}
          </p>
          <p className="text-lg text-gray-800">
            <strong className="font-semibold">Age:</strong> {biodata.age}
          </p>
          <p className="text-lg text-gray-800">
            <strong className="font-semibold">Occupation:</strong>{" "}
            {biodata.occupation}
          </p>
          <p className="text-lg text-gray-800">
            <strong className="font-semibold">Race:</strong> {biodata.race}
          </p>
        </div>
        {/* parent details */}
        <div className="w-full bg-white shadow-lg px-8 py-5 rounded-lg">
          <h1 className="text-2xl text-center">Parent Details</h1>
          <hr />
          <p className="text-lg text-gray-800">
            <strong className="font-semibold">Father's Name:</strong>{" "}
            {biodata.fathersName}
          </p>
          <p className="text-lg text-gray-800">
            <strong className="font-semibold">Mother's Name:</strong>{" "}
            {biodata.mothersName}
          </p>
        </div>

        {/* address details */}
        <div className="w-full bg-white shadow-lg px-8 py-5 rounded-lg">
          <h1 className="text-2xl text-center">Adress Details</h1>
          <hr />
          <p className="text-lg text-gray-800">
            <strong className="font-semibold">Permanent Division:</strong>{" "}
            {biodata.permanentDivision}
          </p>
          <p className="text-lg text-gray-800">
            <strong className="font-semibold">Present Division:</strong>{" "}
            {biodata.presentDivision}
          </p>
        </div>

        {/* partner details */}
        <div className="w-full bg-white shadow-lg px-8 py-5 rounded-lg">
          <h1 className="text-2xl text-center">Expected Partner Details</h1>
          <hr />
          <p className="text-lg text-gray-800">
            <strong className="font-semibold">Expected Partner Age:</strong>{" "}
            {biodata.partnerAge}
          </p>
          <p className="text-lg text-gray-800">
            <strong className="font-semibold mr-2">
              Expected Partner Height:
            </strong>
            {biodata.partnerHeight} inch
          </p>
          <p className="text-lg text-gray-800">
            <strong className="font-semibold mr-2">
              Expected Partner Weight:
            </strong>
            {biodata.partnerWeight} kg
          </p>
        </div>
        {/* contact details */}
        <div className="w-full bg-white shadow-lg px-8 py-5 rounded-lg">
          <h1 className="text-2xl text-center">Contact Details</h1>
          <hr />
          <p className="text-lg text-gray-800">
            <strong className="font-semibold">Contact Email:</strong>{" "}
            {biodata.email}
          </p>
          <p className="text-lg text-gray-800">
            <strong className="font-semibold">Mobile Number:</strong>{" "}
            {biodata.mobileNumber}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewBiodata;
