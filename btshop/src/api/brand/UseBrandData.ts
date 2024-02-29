import { IBrand } from "./IBrand";
import { brands } from "../data/brands.data";

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

export const UseAllBrands = () => {
  return (
    brands.filter(brand => brand.name != null)
  );
}

export const UseBrandsListWithBrandsAmount = (brandsAmount: number, brandsList: IBrand[]) => {
  return brandsList.slice(0, brandsAmount);
}