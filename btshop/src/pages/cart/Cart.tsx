import React, { useState } from "react";
import './style/style.css';
import { cart } from "../../api/local/cart/cart.data";
import { IProduct } from "../../api/product/IProduct";
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";
import { GetCartTotalAmount } from "../../api/local/cart/UseCart";
import { Container } from "@mui/material";

const Cart = () => {
  const [cartItems, setcartItems] = useState(cart)
  const removeItem = (item: IProduct) => {
    const index = cartItems.products.findIndex(product => product === item);
    if (index !== -1) {
      cartItems.products.splice(index, 1);
      setcartItems({ ...cartItems });
    }
  };

  return (
    <Container>
      <div id="" className="font-archivo font-900">
        <div id="page-text" className="text-center m-3">
          CART
        </div>
        <hr className="mlr-5vw" />
        <div className="d-flex items-center dir-column" id="cart-products">
          {
            cartItems.products.map((product, index) => (
              <div className="d-flex items-center" key={product.articul}>
                <div id="cart-product-image">
                  <img src={"/DB/products/" + product.articul + "/" + product.image[0]} alt={product.articul} />
                </div>
                <div className="ml-1">{product.name}</div>
                <div className="ml-1">{product.price}<span>&#36;</span></div>
                <button className="ml-1" onClick={() => removeItem(product)}><CloseIcon /></button>
              </div>
            ))
          }
        </div>
        <div id="order-btn" className="d-flex justify-center m-1">
          <Link to="/order">ORDER</Link>
          <div className="d-flex items-center ml-1">TOTAL {GetCartTotalAmount()}<span>&#36;</span></div>
        </div>
      </div>
    </Container>
  );
}

export default Cart;