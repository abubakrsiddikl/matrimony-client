import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { Heart, User, Phone, MapPin, Briefcase } from "lucide-react";
import useAuth from "../../hooks/useAuth";
import { useAxiosSecure } from "../../hooks/useAxiosSecure";
import daimond from "../../assets/daimond.png";
import toast from "react-hot-toast";
import useRole from "../../hooks/useRole";

const BiodataDetails = () => {
  const biodata = useLoaderData();
  const { role } = useRole();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const handleAddToFavourites = async () => {
    if (!user) return navigate("/login");
    const userData = {
      name: biodata?.name,
      email: user?.email,
      biodataId: biodata?.biodataId,
      permanentAddress: biodata?.permanentDivision,
      occupation: biodata?.occupation,
    };

    try {
      const { data } = await axiosSecure.post("/favourites-biodata", userData);
      if (data.insertedId) {
        toast.success(
          `${biodata?.biodataId} added to favourites successfully.`
        );
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-gray-100 py-10 px-5 md:px-20">
      {/* Profile Header */}
      <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col md:flex-row items-center gap-6">
        <img
          src={biodata?.image}
          className="w-40 h-40 rounded-full shadow-lg"
          alt="Profile"
        />
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-semibold text-gray-800">
            {biodata?.name}
          </h2>
          <p className="text-lg text-gray-600">ID: {biodata?.biodataId}</p>
          <p className="text-lg text-gray-600">
            Biodata Type: {biodata?.biodataType}
          </p>
          {user && (
            <button
              onClick={handleAddToFavourites}
              className="flex items-center gap-2 bg-blue-600 text-white text-lg font-medium px-5 py-2.5 rounded-lg mt-4 hover:bg-blue-700 transition-all"
            >
              <Heart className="w-5 h-5" />
              Add to Favourites
            </button>
          )}
        </div>
      </div>

      {/* Details Sections */}
      <div className="mt-8 space-y-6">
        {/* Basic Details */}
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <User className="w-6 h-6 text-gray-700" />
            Basic Details
          </h3>
          <hr className="my-2" />
          <p>
            <strong>Date of Birth:</strong> {biodata.dateOfBirth}
          </p>
          <p>
            <strong>Height:</strong> {biodata.height} inch
          </p>
          <p>
            <strong>Weight:</strong> {biodata.weight} kg
          </p>
          <p>
            <strong>Age:</strong> {biodata.age}
          </p>
          <p>
            <strong>Occupation:</strong> {biodata.occupation}
          </p>
          <p>
            <strong>Race:</strong> {biodata.race}
          </p>
        </div>

        {/* Contact Details */}
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <Phone className="w-6 h-6 text-gray-700" />
            Contact Details
          </h3>
          <hr className="my-2" />
          {role === "premium" ? (
            <>
              <p>
                <strong>Email:</strong> {biodata.email}
              </p>
              <p>
                <strong>Phone:</strong> {biodata.mobileNumber}
              </p>
            </>
          ) : (
            <Link to={`/payment/${biodata?.biodataId}`}>
              <button className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-orange-400 text-white px-5 py-2.5 rounded-lg mt-3 hover:from-pink-600 hover:to-orange-500 transition-all">
                <img src={daimond} className="w-5 h-5 text-orange-400" />
                Request Contact Information
              </button>
            </Link>
          )}
        </div>

        {/* Address Details */}
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <MapPin className="w-6 h-6 text-gray-700" />
            Address Details
          </h3>
          <hr className="my-2" />
          <p>
            <strong>Permanent Division:</strong> {biodata.permanentDivision}
          </p>
          <p>
            <strong>Present Division:</strong> {biodata.presentDivision}
          </p>
        </div>

        {/* Partner Expectations */}
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-gray-700" />
            Expected Partner Details
          </h3>
          <hr className="my-2" />
          <p>
            <strong>Age:</strong> {biodata.partnerAge}
          </p>
          <p>
            <strong>Height:</strong> {biodata.partnerHeight} inch
          </p>
          <p>
            <strong>Weight:</strong> {biodata.partnerWeight} kg
          </p>
        </div>
      </div>
    </div>
  );
};

export default BiodataDetails;
