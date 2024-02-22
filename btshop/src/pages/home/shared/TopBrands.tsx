import React from "react";
import BrandItem from "./brand-item/BrandItem";
import { brands } from "../../../api/data/brands.data";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";

const TopBrands = () => {
  return (
    <section className="text-center">
      <Container>
        <div>
          <div className="top-brands-text font-archivo color-black mt-6vw mb-3vw">SHOP BY BRANDS</div>
          <div className="d-flex justify-center flex-wrap">
            <BrandItem brand={brands[0]} />
            <BrandItem brand={brands[1]} />
            <BrandItem brand={brands[2]} />
            <BrandItem brand={brands[3]} />
          </div>
          <div className="catalog-section-btn">
            <Link to={"/brands/"}>SEE ALL BRANDS</Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TopBrands;
