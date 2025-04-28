import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import SectionTitle from "../../../../components/SectionTitle";
import { useState } from "react";
import SslCommerzePayment from "./SslCommerzePayment";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_KEY);
const Payment = () => {
  const [sslCommerze, setSslCommerze] = useState(false);
  return (
    <div>
      <SectionTitle heading="Payment To Contact"></SectionTitle>
      <div className="w-4/5 mx-auto mt-10 mb-10">
        <Tabs default="0">
          <TabList>
            <Tab>Stripe</Tab>
            <Tab>SslCommerze</Tab>
          </TabList>

          <TabPanel>
            <Elements stripe={stripePromise}>
              <CheckoutForm></CheckoutForm>
            </Elements>
          </TabPanel>
          <TabPanel>
            <SslCommerzePayment></SslCommerzePayment>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Payment;
