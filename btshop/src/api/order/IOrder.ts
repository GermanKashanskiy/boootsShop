import { IProduct } from "../product/IProduct";

export interface IOrder {
  orderArticle: string,
  orderItems: IProduct[],
  customerId: number,
  phone: string,
  country: string,
  city: string,
  street: string,
  building: string,
  orderPrice: number,
  deliveryStatus: boolean,
  fName: string,
  lName: string,
}