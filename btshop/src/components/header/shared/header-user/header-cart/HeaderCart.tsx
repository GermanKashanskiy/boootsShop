import { Fade, IconButton, Paper, Popper, SvgIcon } from "@mui/material";
import PopupState, { bindPopper, bindToggle } from "material-ui-popup-state";
import React, { useState } from "react";
import { cart } from "../../../../../api/local/cart/cart.data";
import './style/header-cart.css';
import CloseIcon from '@mui/icons-material/Close';
import { IProduct } from "../../../../../api/product/IProduct";
import { RemoveFromCart } from "../../../../../api/local/cart/UseCart";

const HeaderCart = () => {
  const [headerItems, setHeaderItems] = useState(cart)
  const removeItem = (item: IProduct) => {
    const index = headerItems.products.findIndex(product => product === item);
    if (index !== -1) {
      headerItems.products.splice(index, 1);
      setHeaderItems({ ...headerItems });
    }
  };

  return (
    <>
      <PopupState variant="popper" popupId="demo-popup-popper">
        {(popupState) => (
          <div>

            <IconButton {...bindToggle(popupState)}>
              <SvgIcon>
                <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2zM6.16 6h12.15l-2.76 5H8.53zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2m10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2"></path>
              </SvgIcon>
            </IconButton>

            <Popper {...bindPopper(popupState)} transition>
              {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                  <Paper elevation={3} sx={{ borderRadius: "25px" }}>
                    <div className="d-flex dir-column font-archivo font-900 p-1" id="header-cart">
                      <div className="text-center">CART</div>
                      <hr />
                      {
                        headerItems.products.map((product, index) => (
                          <div className="d-flex items-center" key={product.articul}>
                            <div id="cart-product-image">
                              <img src={"/DB/products/" + product.articul + "/" + product.image[0]} alt={product.articul} />
                            </div>
                            <div className="ml-1">{product.name}</div>
                            <div className="ml-1">{product.price}</div>
                            <button className="ml-1" onClick={() => removeItem(product)}><CloseIcon /></button>
                          </div>
                        ))
                      }
                    </div>
                  </Paper>
                </Fade>
              )}
            </Popper>
          </div>
        )}
      </PopupState>
    </>
  );
}

export default HeaderCart;