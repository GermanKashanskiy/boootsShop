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
    <div className="p-home">
      <Header />

      <section className="intro-section-container not-coppy">
        <div className="intro-section_store-name">BOOOTSHOP</div>

        <div className="intro-section_shop-now">
          <div className="shop-now_text-container">
            Unleash your inner fashionista with our curated collection of the
            hottest shoe trends.
          </div>
          <a href="">SHOP NOW</a>
        </div>
      </section>

      <ArrivalsCatalog />

      <TopBrands />

      <Bestseller />

      <FeaturedCatalog />

      <AdvertSection />

      <Footer />
    </div>
  );
}

export default P_Home;
