import React from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import { useAxiosSecure } from "../../../../hooks/useAxiosSecure";

const SslCommerzePayment = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const paymentInfo = {
      email,
      name: user?.displayName,
      biodataId: parseInt(id),
      status: "Pending",
    };
    const res = await axiosSecure.post(
      "http://localhost:5000/sslCommerze",
      paymentInfo
    );
    window.location.replace(res.data.url);
    console.log(res.data.url);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto ">
        <div className="w-full mb-6">
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Biodata ID
          </label>
          <input
            type="text"
            defaultValue={id}
            readOnly
            id="name"
            name="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your name"
          />
        </div>

        <div className="w-full mb-6">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            defaultValue={user?.email}
            readOnly
            id="email"
            name="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your email"
          />
        </div>

        <button
          type="submit"
          className="w-full
          py-3
          text-white
          font-semibold
          rounded-lg
          focus:outline-none
          focus:ring-2
          focus:ring-green-600 bg-green-500 hover:bg-green-600"
        >
          Pay Now 5$
        </button>
      </form>
    </div>
  );
};

export default SslCommerzePayment;
