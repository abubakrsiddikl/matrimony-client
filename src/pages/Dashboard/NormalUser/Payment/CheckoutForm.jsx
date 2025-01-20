import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";

const CheckoutForm = () => {
  const [err, setErr] = useState("");
  const { user } = useAuth();
  const { id } = useParams();
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (event) => {
    event.preventDefault();
    // check stripe and element
    if (!stripe || !elements) {
      return;
    }
    // get crad info
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    // create a payment method
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("error", error);
      setErr(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setErr("");
    }
  };
  return (
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

      <div className="w-full mb-6">
        <label
          htmlFor="card-element"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Credit Card Information
        </label>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                letterSpacing: "0.5px",
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
                iconColor: "#9e2146",
              },
            },
          }}
        />
        <p className="text-red-600 m-2">{err}</p>
      </div>

      <button
        type="submit"
        className={`w-full py-3 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 ${
          !stripe
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-green-500 hover:bg-green-600"
        }`}
        disabled={!stripe}
      >
        Pay Now
      </button>
    </form>
  );
};

export default CheckoutForm;
