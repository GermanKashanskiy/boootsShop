import React, { useState } from "react";
import { cart } from "../../../../../api/local/cart/cart.data";
import OrderSummary from "./shared/OrderSummary";
import PaymentContainer from "./shared/PaymentContainer";

const PaymentStep = () => {

  return (
    <div className="d-flex justify-space-between font-archivo font-900 m-2">

      <OrderSummary />

      <PaymentContainer />
    </div>
  );
}

export default PaymentStep;