import { IProduct } from "../../../api/product/IProduct";

export const UsePageComponentsList = (pageNum: number, componentsOnPage: number, productsList: IProduct[]) => {
  return productsList.slice(pageNum * componentsOnPage, (pageNum * componentsOnPage) + componentsOnPage);
}