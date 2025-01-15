import React from "react";

const BiodatasFilter = () => {
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
          type="range"
          id="age-range"
          min="18"
          max="60"
          className="w-full mb-4"
        />

        {/* Filter by Biodata Type */}
        <label htmlFor="biodata-type" className="block mb-2">
          Biodata Type:
        </label>
        <select id="biodata-type" className="w-full mb-4">
          <option value="">Select Type</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        {/* Filter by Division */}
        <label htmlFor="division" className="block mb-2">
          Filter by Division:
        </label>
        <select id="division" className="w-full">
          <option value="">Select Division</option>
          <option value="Dhaka">Dhaka</option>
          <option value="Chattagram">Chattagram</option>
          <option value="Rangpur">Rangpur</option>
          <option value="Barisal">Barisal</option>
          <option value="Khulna">Khulna</option>
          <option value="Mymensingh">Mymensingh</option>
          <option value="Sylhet">Sylhet</option>
        </select>
      </aside>
    </div>
  );
};

export default BiodatasFilter;
