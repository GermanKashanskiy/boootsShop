import React from "react";
import "./style/home-style.css";
import ArrivalsCatalog from "./shared/sections/arrivals-section/ArrivalsCatalog";
import TopBrands from "./shared/sections/top-brands-section/TopBrands";
import Bestseller from "./shared/sections/bestseller-section/Bestseller";
import FeaturedCatalog from "./shared/sections/featured-section/FeaturedCatalog";
import AdvertSection from "./shared/sections/advert-section/AdvertSection";
import { Link } from "react-router-dom";

function P_Home() {
  return (
    <div>
      <section className="intro-section-container no-copy">
        <div className="intro-section_store-name font-moirai color-white text-center p-6">BOOOTSHOP</div>
        <div className="intro-section_shop-now font-archivo d-flex items-center justify-space-around flex-wrap">
          <div className="shop-now_text-container d-flex flex-wrap color-white">
            Unleash your inner fashionista with our curated collection of the
            hottest shoe trends.
          </div>
          <Link to="/products/" className="d-flex items-center justify-center no-text-decoration color-black">SHOP NOW</Link>
        </div>
      </section>

      <ArrivalsCatalog />

      <TopBrands />

      <Bestseller />

      <FeaturedCatalog />

      <AdvertSection />

    </div>
  );
}

export default P_Home;
