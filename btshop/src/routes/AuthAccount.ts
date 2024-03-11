import { IAccount } from "../api/account/IAccount"

var AuthAccount: IAccount | null

export const AuthorizeInAccount = (account: IAccount | null) => {
  AuthAccount = account
}

export const GetAuthorizedAccount = () => {
  return AuthAccount
}

