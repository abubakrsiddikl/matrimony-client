import React from "react";

const EditBiodataForm = ({ handleSubmit, onSubmit, register }) => {
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg space-y-6"
    >
      {/* biodata type */}
      <div>
        <label className="block font-medium text-gray-700">Biodata Type</label>
        <select
          defaultValue=""
          {...register("biodataType")}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select Type</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      {/* name Input */}
      <div>
        <label className="block font-medium text-gray-700">Name</label>
        <input
          type="text"
          {...register("name")}
          required
          id="name"
          placeholder="Enter your full name"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* profile image */}
      <div>
        <label className="block font-medium text-gray-700">Profile Image</label>
        <input
          type="file"
          {...register("image")}
          required
          placeholder="Enter your full name"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* date Input */}
      <div>
        <label className="block font-medium text-gray-700">Date of Birth</label>
        <input
          type="date"
          {...register("date")}
          required
          id="name"
          placeholder="Enter your full name"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* height type */}
      <div>
        <label className="block font-medium text-gray-700">Height</label>
        <select
          defaultValue=""
          {...register("height")}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select height</option>
          <option>5.3</option>
          <option>5.4</option>
          <option>4.3</option>
          <option>4.7</option>
        </select>
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Save And Publish Now
        </button>
      </div>
    </form>
  );
};

export default EditBiodataForm;
