import React from "react";
import { useForm } from "react-hook-form";

import { imageUpload } from "../../utility/utility";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import SocialLogin from "../shared/SocialLogin/SocialLogin";
import { Link, useNavigate } from "react-router-dom";

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
      navigate("/")
      toast.success("You are  registered now !");
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="bg-[#F2F2F2] py-10 px-24 rounded-lg">
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto">
          <h1 className="text-center text-3xl font-bold text-black mb-5">
            Please Regiser !
          </h1>
          {/* Name Field */}
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              {...register("name")}
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Your Name"
              required
            />
          </div>
          {/* Email Field */}
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              {...register("email")}
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Your Email"
              required
            />
          </div>
          {/* photo Field */}
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
              Photo
            </label>
            <input
              type="file"
              id="image"
              {...register("image")}
              className="border-4 rounded-lg "
              placeholder="Enter Your Email"
              required
            />
          </div>
          {/* Password Field */}
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
            {errors.password?.type === "maxLength" && (
              <span className="text-red-500">
                Password is must be less than 20 charcater
              </span>
            )}
            {errors.password?.type === "pattern" && (
              <span className="text-red-500">Password should be strong</span>
            )}
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Register
          </button>
        </form>
        <SocialLogin></SocialLogin>
        <p className="text-red-400 mt-4 text-lg">You have already Account ? <Link className="underline" to="/login">Please Login</Link></p>
      </div>
    </div>
  );
};

export default Register;
