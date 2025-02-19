import React from "react";
import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";
import LoadingSppiner from "../../../components/LoadingSppiner";

const UserProfile = () => {
  const { user } = useAuth();
  const { role, isLoading } = useRole();
  if (isLoading) return <LoadingSppiner></LoadingSppiner>;
  console.log(user)

  return (
    <div className="flex p-5 items-center justify-center min-h-screen bg-gray-100  dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-8 max-w-lg w-full">
        {/* Profile Image */}
        <div className="flex flex-col items-center">
          <img
            className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg"
            src={user?.photoURL}
            alt="Profile"
          />
          <h2 className="mt-4 text-2xl font-semibold text-gray-800 dark:text-white">
            {user?.displayName}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            {role === "admin"
              ? "Admin"
              : role === "premium"
              ? "Premium Member"
              : "Normal User"}
          </p>
        </div>

        {/* User Info */}
        <div className="mt-6 space-y-4">
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium text-gray-700 dark:text-gray-300">
              Email:
            </span>
            <span className="text-gray-600 dark:text-gray-400">
              {user?.email}
            </span>
          </div>
       
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium text-gray-700 dark:text-gray-300">
              Member Since:
            </span>
            <span className="text-gray-600 dark:text-gray-400">
              {user?.metadata?.lastSignInTime}
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
            Edit Profile
          </button>
          <button className="px-4 py-2 bg-gray-600 text-white rounded-lg shadow hover:bg-gray-700 transition">
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
