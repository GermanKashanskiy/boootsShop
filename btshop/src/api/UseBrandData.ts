import { IBrand } from "./IBrand";
import { brands } from "./data/brands.data";

export const UseBrandData = {
  getBrandWithArticle: (brandArticle: string): IBrand | undefined => {
    const brandItem = brands.findIndex((element) => element.articul === brandArticle);
    if (brandItem !== -1) {
      return brands[brandItem];
    } else {
      return undefined;
    }
  }
}