import React from "react";
import { UseAllProducts, UseProductsListWithProductsAmmount } from "../../../api/product/UseProductData";
import ProductCardItem from "../../../components/product-card/ProductCardItem";
import { Link } from "react-router-dom";

const Catalog = () => {
  return (
    <div className="mt-4">
      <div className="font-archivo font-900 font-s-3 m-2">CATALOG</div>
      <div className="d-flex justify-center flex-wrap">
        {
          UseProductsListWithProductsAmmount(30, UseAllProducts()).map(product => (
            <ProductCardItem item={product} key={product.articul} />
          ))
        }
      </div>
      <div id="section-btn" className="text-center">
        <Link to="/catalog" className="font-900">MORE</Link>
      </div>
    </div>
  );
}

export default Catalog;