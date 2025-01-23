import React from "react";
import { imageUpload } from "../../../../utility/utility";
import { useForm } from "react-hook-form";

const GotMarried = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const coupleImage = await imageUpload(data.coupleImage[0]);
    const successData = { ...data, coupleImage };
    console.log(successData)
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-2xl rounded-lg p-6 w-full mx-auto max-w-lg space-y-6 mt-5"
      >
        {/* self id Input */}
        <div>
          <label
            htmlFor="self"
            className="block text-sm font-medium text-gray-700"
          >
            Self Biodata Id
          </label>
          <input
            type="number"
            {...register("selfBiodataId")}
            required
            placeholder="Enter your biodata Id"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* partner id Input */}
        <div>
          <label
            htmlFor="partner"
            className="block text-sm font-medium text-gray-700"
          >
            Partner Biodata id
          </label>
          <input
            type="number"
            {...register("partnerBiodataId")}
            required
            placeholder="Enter your Partner Id"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* coupleimage Input */}
        <div>
          <label
            htmlFor="coupleImage"
            className="block text-sm font-medium text-gray-700"
          >
            Couple Image
          </label>
          <input
            type="file"
            {...register("coupleImage")}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            required
            accept="image/*"
          />
        </div>

        {/* Message Textarea */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Success Story Review
          </label>
          <textarea
            {...register("successStroy")}
            rows="5"
            required
            placeholder="Write your message here"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default GotMarried;
