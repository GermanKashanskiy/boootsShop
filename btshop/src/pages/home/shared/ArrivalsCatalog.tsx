import React from "react";
import CardItem from "../../../components/catalog/card-item/CardItem";
import { products } from "../../../api/data/products.data";

const ArrivalsCatalog = () => {
  return (
    <section className='narrivals-section'>
      <div className="narrivals-text">NEW ARRIVALS</div>
      <div className="arrivals-catalog">
        <CardItem item={products[0]} />
        <CardItem item={products[1]} />
        <CardItem item={products[2]} />
      </div>
      <div className="catalog-section-btn">
        <a href="">SEE ALL PRODUCTS</a>
      </div>
    </section>
  );
};

export default ArrivalsCatalog;
