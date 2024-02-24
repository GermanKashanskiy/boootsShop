import { IBrand } from "../brand/IBrand"

export interface IProduct {
    articul: string
    name: string
    brand: IBrand
    description: string
    price: number
    image: string[]
    sales: number
}