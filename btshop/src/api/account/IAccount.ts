import { IOrder } from "../order/IOrder";

export interface IAccount {
  accountId: number,
  username: string,
  email: string,
  password: string,
  fName: string,
  lName: string,
  phone: string,
  country: string,
  city: string,
  street: string,
  building: string,
  orders: IOrder[]
}
