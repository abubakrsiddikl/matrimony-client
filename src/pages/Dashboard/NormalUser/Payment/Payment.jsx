import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import SectionTitle from "../../../../components/SectionTitle";
import { useState } from "react";
import SslCommerzePayment from "./SslCommerzePayment";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_KEY);

const Payment = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <SectionTitle heading="Payment To Contact" />
      <div className="w-11/12 md:w-4/5 mx-auto mt-10">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="flex justify-center space-x-6 mb-8 border-b-2">
            <Tab
              className={`px-6 py-2 text-lg font-semibold cursor-pointer ${
                tabIndex === 0
                  ? "border-b-4 border-blue-600 text-blue-600"
                  : "text-gray-500 hover:text-blue-600"
              }`}
            >
              Stripe
            </Tab>
            <Tab
              className={`px-6 py-2 text-lg font-semibold cursor-pointer ${
                tabIndex === 1
                  ? "border-b-4 border-green-600 text-green-600"
                  : "text-gray-500 hover:text-green-600"
              }`}
            >
              Ssl Commerze
            </Tab>
          </TabList>

          <TabPanel>
            <div className="bg-white shadow-md rounded-lg p-6">
              <Elements stripe={stripePromise}>
                <CheckoutForm />
              </Elements>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="bg-white shadow-md rounded-lg p-6">
              <SslCommerzePayment />
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Payment;
