import { orders } from "../data/oredrs.data";
import { IOrder } from "./IOrder";

export const AddNewOrder = (order: IOrder) => {
  orders.push(order)
}

export const GetUserOrders = (userId: number) => {
  return orders.filter(order => order.customerId == userId)
}

export const GerOrderProducts = (orderId: string) => {
  return orders
    .filter(order => order.orderArticle === orderId)
    .flatMap(order => order.orderItems);
}
