import { IAccount } from "../../../../api/account/IAccount";
import { UseAccountAmount } from "../../../../api/account/UseAccount";

export const newAccount: IAccount = {
  accountId: UseAccountAmount(),
  username: "",
  email: "",
  password: "",
  fName: "",
  lName: "",
  phone: "",
  country: "",
  city: "",
  street: "",
  building: ""
}