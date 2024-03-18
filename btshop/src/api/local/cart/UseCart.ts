import { IProduct } from "../../product/IProduct"
import { cart } from "./cart.data"

export const AddToCart = (product: IProduct) => {
  cart.products.push(product)
}

export const RemoveFromCart = (product: IProduct) => {
  const index = cart.products.findIndex(item => item === product);
  if (index !== -1) {
    cart.products.splice(index, 1);
  }
}

