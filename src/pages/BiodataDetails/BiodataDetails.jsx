import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import daimond from "../../assets/daimond.png";
import card from "../../assets/card.png";
import useAuth from "../../hooks/useAuth";
import { useAxiosSecure } from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import useRole from "../../hooks/useRole";

const BiodataDetails = () => {
  const biodata = useLoaderData();
  const { role } = useRole();
  // console.log(biodata)
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  //   handle add to favourites
  const handleAddToFavourites = async () => {
    const userData = {
      name: biodata?.name,
      email: user?.email,
      biodataId: biodata?.biodataId,
      permanentAddress: biodata?.permanentDivision,
      occupation: biodata?.occupation,
    };
    // add to favourties to save db
    try {
      const { data } = await axiosSecure.post("/favourites-biodata", userData);
      
      if (data.insertedId) {
        toast.success(
          `${biodata?.biodataId} This ID add to fovourties successfull.`
        );
      }
    } catch (err) {
      // console.log(err);
    }
  };
  return (
    <div className="bg-[#F2F2F2] py-10 mt-2">
      <div className=" flex flex-col items-center gap-5 md:flex-row md:justify-start md:items-center md:px-20">
        {/* Profile Picture */}
        <img
          src={biodata?.image}
          className="w-36 h-36  shadow-lg"
          alt="Profile"
        />
        {/* Name and ID */}
        <div className="text-center md:text-left">
          <p className="text-2xl font-bold text-gray-800">
            Name: <span className="text-gray-500">{biodata?.name}</span>
          </p>
          <p className="text-xl font-medium text-gray-700">
            ID: {biodata?.biodataId}
          </p>
          <p className="text-xl font-medium text-gray-700">
            Biodata Type: {biodata.biodataType}
          </p>
          <button
            onClick={handleAddToFavourites}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 gap-2 mt-2"
          >
            <img src={card} className="w-7" alt="" />
            Add to Favourites
          </button>
        </div>
      </div>

      {/* Biodata Details */}
      <div className="grid grid-cols-1 gap-6 mt-10 px-5 md:px-20">
        {/* Basic details card */}
        <div className="w-full bg-white shadow-lg px-8 py-5 rounded-lg">
          <h1 className="text-2xl text-center">Basic Details</h1>
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

        {/* contact details */}
        <div className="w-full bg-white shadow-lg px-8 py-5 rounded-lg">
          <h1 className="text-2xl text-center">Contact Details</h1>
          <hr />
          {role === "premium" ? (
            <>
              <p className="text-lg text-gray-800">
                <strong className="font-semibold">Contact Email:</strong>{" "}
                {biodata.email}
              </p>
              <p className="text-lg text-gray-800">
                <strong className="font-semibold">Mobile Number:</strong>{" "}
                {biodata.mobileNumber}
              </p>
            </>
          ) : (
            <Link to={`/payment/${biodata?.biodataId}`}>
              <button className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl  dark:focus:ring-pink-800 font-medium rounded-lg  px-5 py-2.5 text-center mt-2 mb-2 text-xl flex gap-2">
                <img src={daimond} alt="" className="w-8" /> Request Contact
                Information
              </button>
            </Link>
          )}
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
      </div>
    </div>
  );
};

export default BiodataDetails;
