import React from "react";
import BrandItem from "../../../components/catalog/brand-item/BrandItem";
import { brands } from "../../../api/data/brands.data";
import { Container } from "@mui/material";

const TopBrands = () => {
  return (
    <section className="brands-section">
      <Container>
        <div>
          <div className="top-brands-text">SHOP BY BRANDS</div>
          <div className="top-brands-catalog">
            <BrandItem brand={brands[0]} />
            <BrandItem brand={brands[1]} />
            <BrandItem brand={brands[2]} />
            <BrandItem brand={brands[3]} />
          </div>
          <div className="catalog-section-btn">
            <a href="">SEE ALL BRANDS</a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TopBrands;
