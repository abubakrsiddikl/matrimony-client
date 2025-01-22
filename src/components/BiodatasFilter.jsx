import React from "react";

const BiodatasFilter = ({ setAge, setBiodataType, setPermanentDivision }) => {
  return (
    <div>
      {/* Filter Section */}
      <aside className="lg:py-20 lg:min-h-screen my-10 bg-gray-100 p-4">
        <h2 className="text-lg font-semibold mb-4">Filter Options</h2>
        {/* Filter by Age */}
        <label htmlFor="age-range" className="block mb-2">
          Filter by Age:
        </label>
        <input
          type="number"
          onChange={(e) => setAge(e.target.value)}
          id="age-range"
          min="18"
          max="60"
          className="w-full mb-4"
        />

        {/* Filter by Biodata Type */}
        <label htmlFor="biodata-type" className="block mb-2">
          Biodata Type:
        </label>
        <select
          defaultValue=""
          onChange={(e) => setBiodataType(e.target.value)}
          id="biodata-type"
          className="w-full mb-4"
        >
          <option value="" disabled>
            Select Type
          </option>
          <option>Male</option>
          <option>Female</option>
        </select>

        {/* Filter by Division */}
        <label htmlFor="division" className="block mb-2">
          Filter by Division:
        </label>
        <select
          defaultValue=""
          onChange={(e) => setPermanentDivision(e.target.value)}
          id="division"
          className="w-full"
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
      </aside>
    </div>
  );
};

export default BiodatasFilter;
