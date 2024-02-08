import { IBrand } from "./IBrand"

export interface IProduct {
    articul: string
    name: string
    brand: IBrand
    description: string
    price: number
    image: string[]
    page: string
    sales: number
}