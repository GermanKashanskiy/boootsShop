import React, { useState } from "react";
import { SetStepValid, isPaid } from "../../../order-stepper/shared/OrderValidation";
import { cart } from "../../../../../../api/local/cart/cart.data";
import { newOrder } from "../../../../../../api/local/order/newOrder.data";
import { GetCartTotalAmount } from "../../../../../../api/local/cart/UseCart";
import { orders } from "../../../../../../api/data/oredrs.data";

const PaymentContainer = () => {
  const [_isPaid, setIsPaid] = useState(isPaid)
  const [cartItems] = useState(cart)
  const handleClick = () => {
    setIsPaid(true)
    newOrder.orderItems = cartItems.products
    newOrder.orderPrice = GetCartTotalAmount() + 20 + ((GetCartTotalAmount() * 18) / 100)
    newOrder.deliveryStatus = false
    newOrder.orderArticle = (orders.length * 100000).toString(16)
    SetStepValid(true)
  }

  return (
    <div className="d-flex dir-column items-center">
      <div className="font-s-1N5">LETS PAY IT</div>

      <button onClick={handleClick} className="m-1">
        <img src="/images/bank-card.png" alt="bank card png" />
      </button>
    </div>
  );
}

export default PaymentContainer;