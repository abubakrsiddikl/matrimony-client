import React from "react";
import { useParams } from "react-router-dom";

const PaymentSuccess = () => {
  const { tranId } = useParams();
  return (
    <div className="min-h-screen">
      <h1 className="text-center">
        Your Payment Successfull TransactionId : {tranId}
      </h1>
    </div>
  );
};

export default PaymentSuccess;
