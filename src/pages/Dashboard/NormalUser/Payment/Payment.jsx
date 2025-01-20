import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import SectionTitle from "../../../../components/SectionTitle";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_KEY);
const Payment = () => {
  return (
    <div>
        <SectionTitle heading="Payment To Contact"></SectionTitle>
     <div className="w-4/5 mx-auto mt-10 ">
     <Elements stripe={stripePromise}>
        <CheckoutForm></CheckoutForm>
      </Elements>
     </div>
    </div>
  );
};

export default Payment;
