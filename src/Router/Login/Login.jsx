import React from "react";
import { set, useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import SocialLogin from "../../pages/shared/SocialLogin/SocialLogin";
import { ChevronLeft } from "lucide-react";

const Login = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    //login user
    try {
      const result = await signIn(data.email, data.password);
      navigate("/");
      toast.success("You are logged in !");
    } catch (err) {
      toast.error(err.message);
    }
  };
  const fillDemoCredentials = (role) => {
    const credentials = {
      user: { email: "user@gmail.com", password: "Test1234@" },
      premium: { email: "premium@gmail.com", password: "Test1234@" },
      admin: { email: "admin@gmail.com", password: "Admin1234@" },
    };
    setValue("email", credentials[role].email);
    setValue("password", credentials[role].password);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-5">
      <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-md">
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
            Please Login!
          </h1>

          {/* Email Field */}
          <div className="mb-5">
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

          {/* Password Field */}
          <div className="mb-5">
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
            Login
          </button>
        </form>

        {/* Demo Credentials */}
        <div className="mt-5 text-center">
          <p className="text-gray-600 font-medium">
            Login with Demo Credentials:
          </p>
          <div className="flex gap-2 mt-3">
            <button
              type="button"
              className="w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition-all"
              onClick={() => fillDemoCredentials("user")}
            >
              User
            </button>
            <button
              type="button"
              className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition-all"
              onClick={() => fillDemoCredentials("premium")}
            >
              Premium User
            </button>
            <button
              type="button"
              className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-all"
              onClick={() => fillDemoCredentials("admin")}
            >
              Admin
            </button>
          </div>
        </div>

        {/* Social Login */}
        <div className="mt-5">
          <SocialLogin />
        </div>

        {/* Register Link */}
        <p className="text-center text-gray-700 mt-5">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-blue-600 font-medium hover:underline"
          >
            Please Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
