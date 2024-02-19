import { Container } from "@mui/material";
import React from "react";
import CardItem from "./card-item/CardItem";
import { products } from "../../../api/data/products.data";

const FeaturedCatalog = () => {
  return (
    <section className="text-center">
      <div className="featured-text mt-6vw mb-3vw color-black font-archivo">FEATURED SHOES</div>
      <div className="d-flex justify-center flex-wrap">
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
