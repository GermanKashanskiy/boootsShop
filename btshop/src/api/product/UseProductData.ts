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

export const UseProductsBySales = () => {
  return products.filter(product => product.price !== 0).sort((a, b) => b.sales - a.sales);
}

export const UseProductsListWithProductsAmmount = (productsAmount: number, productsList: IProduct[]) => {
  return productsList.slice(0, productsAmount);
}

export const UseProductAmount = () => {
  return products.length
}

export const UseNewArrivals = (productsAmount: number) => {
  var newArrivals = []
  for (let i = products.length - 1; i >= Math.max(0, products.length - productsAmount); i--) {
    newArrivals.push(products[i])
  }
  return newArrivals
}
