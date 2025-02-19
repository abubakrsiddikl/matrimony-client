import React from "react";

const BiodatasFilter = ({ setAge, setBiodataType, setPermanentDivision }) => {
  return (
    <div className="">
      {/* Filter Section */}
      <aside className=" mt-2 bg-white  rounded-lg p-6 border">
        <h2 className="text-xl font-bold  text-gray-800">Filter Options</h2>

        {/* Filter by Age */}
        <div className="mb-5">
          <label
            htmlFor="age-range"
            className="block mb-2 text-gray-700 font-medium"
          >
            Filter by Age:
          </label>
          <input
            type="number"
            onChange={(e) => setAge(e.target.value)}
            id="age-range"
            min="15"
            max="60"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Filter by Biodata Type */}
        <div className="mb-5">
          <label
            htmlFor="biodata-type"
            className="block mb-2 text-gray-700 font-medium"
          >
            Biodata Type:
          </label>
          <select
            defaultValue=""
            onChange={(e) => setBiodataType(e.target.value)}
            id="biodata-type"
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="" disabled>
              Select Type
            </option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        {/* Filter by Division */}
        <div>
          <label
            htmlFor="division"
            className="block mb-2 text-gray-700 font-medium"
          >
            Filter by Division:
          </label>
          <select
            defaultValue=""
            onChange={(e) => setPermanentDivision(e.target.value)}
            id="division"
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="" disabled>
              Select Division
            </option>
            <option>Dhaka</option>
            <option>Chattogram</option>
            <option>Rangpur</option>
            <option>Barisal</option>
            <option>Khulna</option>
            <option>Mymensingh</option>
            <option>Sylhet</option>
          </select>
        </div>
      </aside>
    </div>
  );
};

export default BiodatasFilter;
