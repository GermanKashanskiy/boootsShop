import React from "react";
import { products } from "../../../api/data/products.data";
import ProductCardItem from "../../../components/product-card/ProductCardItem";
import { Link } from "react-router-dom";
import { UseAllProducts, UseProductsListWithProductsAmmount } from "../../../api/product/UseProductData";

const NewArrivals = () => {
  return (
    <>
      <div className="font-archivo font-900 font-s-3 m-2">NEW ARRIVALS</div>
      <div className="d-flex justify-center">

        {
          UseProductsListWithProductsAmmount(5, UseAllProducts()).map(product => (
            <ProductCardItem item={product} key={product.articul} />
          ))
        }

      </div>
      <div id="section-btn" className="text-center">
        <Link to="/" className="font-900">MORE</Link>
      </div>
    </>
  );
}

export default NewArrivals;