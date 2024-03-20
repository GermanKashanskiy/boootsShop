import React, { useState } from "react";
import { cart } from "../../../../../api/local/cart/cart.data";
import { GetCartTotalAmount } from "../../../../../api/local/cart/UseCart";
import OrderSummary from "./OrderSummary";

const PaymentStep = () => {
  const [cartItems] = useState(cart)

  return (
    <div className="d-flex justify-space-between font-archivo font-900 m-2">

      <OrderSummary />

      <div className="font-s-1N5">LETS PAY IT</div>
    </div>
  );
}

export default PaymentStep;