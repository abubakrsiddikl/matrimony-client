import React from "react";
import { useForm } from "react-hook-form";

import { imageUpload } from "../../utility/utility";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import SocialLogin from "../shared/SocialLogin/SocialLogin";
import { Link, useNavigate } from "react-router-dom";
import { saveUser } from "../../utility/saveUser";
import { ChevronLeft } from "lucide-react";

const Register = () => {
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const image = data.image[0];
    const photoURL = await imageUpload(image);
    // create user in firebase
    try {
      const result = await createUser(data.email, data.password);
      await updateUserProfile(data.name, photoURL);
      saveUser(result?.user);
      navigate("/");
      toast.success("You are  registered now !");
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-5">
      <div className="bg-white shadow-lg rounded-lg py-5 px-10 w-full max-w-md">
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto">
          <Link to="/">
            <button
              type="button"
              className=" bg-blue-600 p-2 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all flex items-center"
            >
              <ChevronLeft />
              Back to Home
            </button>
          </Link>
          <h1 className="text-center text-3xl font-bold text-gray-800 mt-2">
            Please Register!
          </h1>

          {/* Name Field */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block mb-2 text-lg font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              {...register("name")}
              id="name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
              placeholder="Enter Your Name"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-lg font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              {...register("email")}
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
              placeholder="Enter Your Email"
              required
            />
          </div>

          {/* Photo Field */}
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block mb-2 text-lg font-medium text-gray-700"
            >
              Upload Photo
            </label>
            <input
              type="file"
              id="image"
              {...register("image")}
              className="w-full px-4 py-2 border-2 border-dashed rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 cursor-pointer"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-2 text-lg font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
              })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
              required
            />
            {errors.password?.type === "maxLength" && (
              <span className="text-red-500 text-sm">
                Password must be less than 20 characters
              </span>
            )}
            {errors.password?.type === "pattern" && (
              <span className="text-red-500 text-sm">
                Password should be strong
              </span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-all"
          >
            Register
          </button>
        </form>

        {/* Social Login */}
        <div className="mt-5">
          <SocialLogin />
        </div>

        {/* Login Redirect */}
        <p className="text-center text-gray-700 mt-5">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 font-medium hover:underline"
          >
            Please Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
