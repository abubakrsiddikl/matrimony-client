import React from "react";
import { Link } from "react-router-dom";
import { User, MapPin, Calendar, Briefcase } from "lucide-react";

const PremiumCard = ({ biodata }) => {
  const {
    _id,
    biodataType,
    biodataId,
    permanentDivision,
    age,
    occupation,
    image,
  } = biodata;
  return (
    <div className=" ">
      {/* card 1 */}
      <div className="w-full mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200 flex flex-col md:flex-row items-center md:space-x-6 space-y-6 md:space-y-0">
        {/* image */}
        <div className="w-40 h-40 rounded-full overflow-hidden  border-4 border-indigo-500 mx-auto md:mx-0">
          <img
            src={image}
            className="w-full h-full object-cover"
            alt="Profile"
          />
        </div>
        {/* card content */}
        <div className="text-center md:text-left space-y-2 flex-1">
          <p className="text-2xl font-bold text-gray-700">
            Biodata Id:
            <span className="text-indigo-600 ml-3">{biodata?.biodataId}</span>
          </p>
          <p className="text-lg text-gray-600">
            Biodata Type: <span className="font-medium">{biodataType}</span>
          </p>
          <p className="text-lg text-gray-600">
            Permanent Division:{" "}
            <span className="font-medium">{permanentDivision}</span>
          </p>
          <p className="text-lg text-gray-600">
            Age: <span className="font-medium">{age}</span>
          </p>
          <p className="text-lg text-gray-600">
            Occupation: <span className="font-medium">{occupation}</span>
          </p>
          {/* button*/}
          <Link to={`/biodata/details/${_id}`}>
            <button className="mt-4 px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out flex items-center gap-2">
              View Profile
            </button>
          </Link>
        </div>
      </div>
    </div>
    
  );
};

export default PremiumCard;
