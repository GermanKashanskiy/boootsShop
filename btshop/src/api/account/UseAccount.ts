import { accounts } from "../data/accounts.data"
import { IAccount } from "./IAccount";

export const UseAccountWithUsername = (username: string) => {
  const matchedAccounts = accounts.filter(account => account.username === username);
  const usernames = matchedAccounts.map(account => account.username);
  return usernames;
}

export const UseAccountWithEmail = (email: string) => {
  const matchedAccounts = accounts.filter(account => account.email === email);
  const emails = matchedAccounts.map(account => account.email);
  return emails;
}

export const UseAccountAmount = () => {
  return accounts.length;
}

export const AddNewAccount = (newAccount: IAccount) => {
  accounts.push(newAccount)
}