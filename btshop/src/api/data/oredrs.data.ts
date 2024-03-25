import { IOrder } from "../order/IOrder";
import { products } from "./products.data";

export const orders: IOrder[] = [
  {
    orderArticle: "0",
    orderItems: [products[0], products[0], products[0]],
    customerId: 0,
    phone: "+1234567890",
    country: "none",
    city: "none",
    street: "none",
    building: "none",
    orderPrice: 35,
    deliveryStatus: true,
    fName: "admin",
    lName: "neAdmin",
  },
  {
    orderArticle: "2",
    orderItems: [products[0], products[0], products[0]],
    customerId: 0,
    phone: "+1234567890",
    country: "none",
    city: "none",
    street: "none",
    building: "none",
    orderPrice: 35,
    deliveryStatus: true,
    fName: "admin",
    lName: "neAdmin",
  }
]