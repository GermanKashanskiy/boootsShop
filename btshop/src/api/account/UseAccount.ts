import { accounts } from "../data/accounts.data"

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