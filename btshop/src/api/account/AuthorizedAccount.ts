import { accounts } from "../data/accounts.data"

export const GetAccountWitchId = (id: number) => {
  return (
    accounts.filter(account => account.accountId === id)
  )
}