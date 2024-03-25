import React, { useState } from "react";
import { cart } from "../../../../../../api/local/cart/cart.data";
import { GetCartTotalAmount } from "../../../../../../api/local/cart/UseCart";

const OrderSummary = () => {
  const [cartItems] = useState(cart)
  return (
    <>
      <div className="d-flex dir-column" id="cart-products">
        <div className="text-center mb-1">ORDER SUMMARY</div>

        {
          cartItems.products.map((product, index) => (
            <div className="d-flex dir-column">
              <hr style={{ backgroundColor: "#d7d7d7", height: "2px" }} />
              <div className="d-flex justify-space-between items-center" key={product.articul}>
                <div id="cart-product-image">
                  <img src={"/DB/products/" + product.articul + "/" + product.image[0]} alt={product.articul} />
                </div>
                <div className="ml-1">{product.name}</div>
                <div className="ml-1">{product.price}<span>&#36;</span></div>
              </div>
            </div>
          ))
        }

        <hr style={{ backgroundColor: "#d7d7d7", height: "2px" }} />

        <div className="d-flex dir-column font-s-1N1 mt-1">
          <div className="d-flex justify-space-between">
            <div>ON CART</div>
            <div>{GetCartTotalAmount()}<span>&#36;</span></div>
          </div>
          <div className="d-flex justify-space-between">
            <div>DELIVERY</div>
            <div>20<span>&#36;</span></div>
          </div>
          <div className="d-flex justify-space-between font-s-1">
            <div>VAT 18%</div>
            <div>{(GetCartTotalAmount() * 18) / 100}<span>&#36;</span></div>
          </div>
          <div className="d-flex justify-space-between font-s-1N5">
            <div>TOTAL</div>
            <div>{GetCartTotalAmount() + 20}<span>&#36;</span></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderSummary;