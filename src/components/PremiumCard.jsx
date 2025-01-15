import React from "react";

const PremiumCard = ({ card }) => {
  return (
    <div className="grid grid-cols-1 my-10 md:grid-cols-2 gap-3 ">
        {/* card 1 */}
        <div className="w-full mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200 flex flex-col md:flex-row items-center md:space-x-6 space-y-6 md:space-y-0">
      {/* image */}
      <div className="w-40 h-40 overflow-hidden rounded-full border-4 border-indigo-500 mx-auto md:mx-0">
        <img
          src="https://i.ibb.co.com/x51z2Ym/myprofile.jpg"
          className="w-full h-full object-cover"
          alt="Profile"
        />
      </div>
      {/* card content */}
      <div className="text-center md:text-left space-y-2 flex-1">
        <p className="text-2xl font-bold text-gray-700">
          Biodata Id: <span className="text-indigo-600">1</span>
        </p>
        <p className="text-lg text-gray-600">
          Biodata Type: <span className="font-medium">Male</span>
        </p>
        <p className="text-lg text-gray-600">
          Permanent Division: <span className="font-medium">Barishal</span>
        </p>
        <p className="text-lg text-gray-600">
          Age: <span className="font-medium">18</span>
        </p>
        <p className="text-lg text-gray-600">
          Occupation: <span className="font-medium">Student</span>
        </p>
        {/* button*/}
        <button className="mt-4 px-6 py-2 bg-indigo-600 text-white font-semibold rounded-full shadow hover:bg-indigo-700 transition duration-300">
          View Profile
        </button>
      </div>
    </div>
        {/* card 2 */}
        <div className="w-full mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200 flex flex-col md:flex-row items-center md:space-x-6 space-y-6 md:space-y-0">
      {/* Image */}
      <div className="w-40 h-40 overflow-hidden rounded-full border-4 border-indigo-500 mx-auto md:mx-0">
        <img
          src="https://i.ibb.co.com/x51z2Ym/myprofile.jpg"
          className="w-full h-full object-cover"
          alt="Profile"
        />
      </div>
      {/* Card Content */}
      <div className="text-center md:text-left space-y-2 flex-1">
        <p className="text-2xl font-bold text-gray-700">
          Biodata Id: <span className="text-indigo-600">1</span>
        </p>
        <p className="text-lg text-gray-600">
          Biodata Type: <span className="font-medium">Male</span>
        </p>
        <p className="text-lg text-gray-600">
          Permanent Division: <span className="font-medium">Barishal</span>
        </p>
        <p className="text-lg text-gray-600">
          Age: <span className="font-medium">18</span>
        </p>
        <p className="text-lg text-gray-600">
          Occupation: <span className="font-medium">Student</span>
        </p>
        {/* Button */}
        <button className="mt-4 px-6 py-2 bg-indigo-600 text-white font-semibold rounded-full shadow hover:bg-indigo-700 transition duration-300">
          View Profile
        </button>
      </div>
    </div>
    </div>
    
  );
};

export default PremiumCard;
