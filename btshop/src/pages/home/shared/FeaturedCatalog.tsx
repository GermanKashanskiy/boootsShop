import { Container } from "@mui/material";
import React from "react";
import CardItem from "../../../components/catalog/card-item/CardItem";
import { products } from "../../../api/data/products.data";

const FeaturedCatalog = () => {
  return (
    <section className="featured-section">
      <div className="featured-text">FEATURED SHOES</div>
      <div className="featured-catalog">
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

export default FeaturedCatalog;
