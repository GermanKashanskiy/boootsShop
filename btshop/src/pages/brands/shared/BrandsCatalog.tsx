import React from "react";
import { brands } from "../../../api/data/brands.data";
import BrandItemCard from "../../../components/brand-card/BrandItemCard";

const BrandsCatalog = () => {
  return (
    <section className="d-flex flex-wrap justify-center">
      {
        brands.map(brand => <BrandItemCard brand={brand} key={"brand-item-"} />)
      }
    </section>
  );
}

export default BrandsCatalog;