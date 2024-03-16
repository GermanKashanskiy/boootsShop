import React from "react";
import ProductCardItem from "../../../components/product-card/ProductCardItem";
import { UseNewArrivals, UseProductsListWithProductsAmmount } from "../../../api/product/UseProductData";

const NewArrivals = () => {
  return (
    <div className="mt-4">
      <div className="font-archivo font-900 font-s-3 m-2">NEW ARRIVALS</div>
      <div className="d-flex justify-center flex-wrap">
        {
          UseProductsListWithProductsAmmount(5, UseNewArrivals(5)).map(product => (
            <ProductCardItem item={product} key={product.articul} />
          ))
        }
      </div>
    </div>
  );
}

export default NewArrivals;