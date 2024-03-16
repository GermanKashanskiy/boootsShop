import React from "react";
import CardItem from "../../card-item/CardItem";
import './style/arrivals-section.css';
import { Link } from "react-router-dom";
import { UseAllProducts, UseNewArrivals, UseProductsListWithProductsAmmount } from "../../../../../api/product/UseProductData";

const ArrivalsCatalog = () => {
  return (
    <section className='text-center'>
      <div className="narrivals-text color-black font-archivo mt-6vw mb-3vw">NEW ARRIVALS</div>
      <div className="d-flex justify-center flex-wrap">
        {
          UseProductsListWithProductsAmmount(3, UseNewArrivals(3)).map(product => (
            <CardItem item={product} key={product.articul} />
          ))
        }
      </div>
      <div className="catalog-section-btn">
        <Link to="/products/">SEE ALL PRODUCTS</Link>
      </div>
    </section>
  );
};

export default ArrivalsCatalog;
