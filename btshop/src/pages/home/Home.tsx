import React from "react";
import Header from "../../components/header/Header";
import "./style/home-style.css";
import ArrivalsCatalog from "./shared/ArrivalsCatalog";
import TopBrands from "./shared/TopBrands";
import Bestseller from "./shared/Bestseller";
import FeaturedCatalog from "./shared/FeaturedCatalog";
import AdvertSection from "./shared/AdvertSection";
import Footer from "../../components/footer/Footer";

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
          <a href="" className="d-flex items-center justify-center no-text-decoration color-black">SHOP NOW</a>
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
