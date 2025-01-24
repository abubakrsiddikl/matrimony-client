import React from "react";
import { imageUpload } from "../../../../utility/utility";
import { useForm } from "react-hook-form";
import { useAxiosSecure } from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const GotMarried = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const coupleImage = await imageUpload(data.coupleImage[0]);
    const successStroy = { ...data, coupleImage, email: user?.email };
    const { data: story } = await axiosSecure.post(
      "/success-story",
      successStroy
    );
    if (story.insertedId) {
      toast.success("Your story saved successfully .");
      navigate("/")
    }
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

         {/* marige date Input */}
         <div>
          <label
            htmlFor="marrige"
            className="block text-sm font-medium text-gray-700"
          >
            Marrige Date
          </label>
          <input
            type="date"
            {...register("marrigeDate")}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            required
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

        {/* rating Input */}
        <div>
          <label
            htmlFor="partner"
            className="block text-sm font-medium text-gray-700"
          >
            Rating
          </label>
          <input
            type="text"
            {...register("rating")}
            required
            placeholder="Plese Review Rating"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          />
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
