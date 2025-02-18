import React from "react";
import { imageUpload } from "../../../../utility/utility";
import { useAxiosSecure } from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import toast from "react-hot-toast";

const AddTestimonials = () => {
  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const email = from.email.value;
    const image = from.image.files[0];
    const photoURL = await imageUpload(image);
    
    const review = from.review.value;
    const rating = from.rating.value;
    // post reveiw to db
    const testimonial = { name, email, photoURL, review, rating };
    
    const { data } = await axiosSecure.post("/testimonials", testimonial);
    if (data.insertedId) {
      toast.success("Your review has been saved . ")
    }
    
  };
  return (
    <div>
      <div className=" min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Add Your Review
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg space-y-6"
        >
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              defaultValue={user?.email}
              readOnly
              name="email"
              placeholder="Enter your email address"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Subject Input */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700"
            ></label>
            <input
              type="file"
              id="subject"
              name="image"
              placeholder="Enter the subject"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Message Textarea */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Your Review
            </label>
            <textarea
              id="message"
              name="review"
              rows="5"
              placeholder="Write your review for website"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          {/* rating */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700"
            >
              Rating
            </label>
            <input
              type="text"
              id="subject"
              name="rating"
              placeholder="Enter your rating"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Add Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTestimonials;
