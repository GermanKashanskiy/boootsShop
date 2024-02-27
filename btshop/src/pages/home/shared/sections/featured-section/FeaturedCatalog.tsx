import React from "react";
import CardItem from "../../card-item/CardItem";
import './style/featured-section.css';
import { Link } from "react-router-dom";
import { UseAllProducts, UseProductsListWithProductsAmmount } from "../../../../../api/product/UseProductData";

const FeaturedCatalog = () => {
  return (
    <section className="text-center">
      <div className="featured-text mt-6vw mb-3vw color-black font-archivo">FEATURED SHOES</div>
      <div className="d-flex justify-center flex-wrap">
        {
          UseProductsListWithProductsAmmount(3, UseAllProducts()).map(product => (
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

export default FeaturedCatalog;
