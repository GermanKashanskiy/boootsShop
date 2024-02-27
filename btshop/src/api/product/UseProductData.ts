import { IProduct } from "./IProduct";
import { products } from "../data/products.data"

export const UseProductData = {
  getProductWithArticle: (article: string): IProduct | undefined => {
    const productIndex = products.findIndex((element) => element.articul === article);
    if (productIndex !== -1) {
      return products[productIndex];
    } else {
      return undefined;
    }
  }
}

export const UseProductWithBrand = (brandArticle: string) => {
  return (
    products.filter(product => product.brand.articul === brandArticle)
  );
}

export const UseAllProducts = () => {
  return (
    products.filter(product => product.price != 0)
  );
}

export const UseProductsListWithProductsAmmount = (productsAmount: number, productsList: IProduct[]) => {
  return productsList.slice(0, productsAmount);
}
