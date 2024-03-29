import { IProduct } from '../../../../../api/product/IProduct';

export function FindBestseller(products: IProduct[]): IProduct | null {
    if (products.length === 0) {
        return null;
    }

    let bestseller: IProduct = products[0];

    for (const product of products) {
        if (product.sales > bestseller.sales) {
            bestseller = product;
        }
    }

    return bestseller;
}
