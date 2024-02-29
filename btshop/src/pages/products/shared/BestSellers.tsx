import React from "react";
import { UseProductsBySales, UseProductsListWithProductsAmmount } from "../../../api/product/UseProductData";
import ProductCardItem from "../../../components/product-card/ProductCardItem";

const BestSellers = () => {
  return (
    <div className="mt-4">
      <div className="font-archivo font-900 font-s-3 m-2">BEST SELLERS</div>
      <div className="d-flex justify-center flex-wrap">
        {
          UseProductsListWithProductsAmmount(5, UseProductsBySales()).map(product => (
            <ProductCardItem item={product} key={product.articul} />
          ))
        }
      </div>
    </div>
  );
}

export default BestSellers;