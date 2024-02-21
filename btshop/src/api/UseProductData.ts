import { IProduct } from "./IProduct";
import { products } from "./data/products.data"

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