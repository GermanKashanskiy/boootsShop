import React from "react";
import { brands } from "../../../api/data/brands.data";
import BrandItemCard from "../../../components/brand-card/BrandItemCard";

const BrandsCatalog = () => {
  return (
    <section className="d-flex flex-wrap justify-center">
      <BrandItemCard brand={brands[0]} />
      <BrandItemCard brand={brands[0]} />
      <BrandItemCard brand={brands[0]} />
      <BrandItemCard brand={brands[0]} />
      <BrandItemCard brand={brands[0]} />
      <BrandItemCard brand={brands[0]} />
      <BrandItemCard brand={brands[0]} />
      <BrandItemCard brand={brands[0]} />
      <BrandItemCard brand={brands[0]} />
      <BrandItemCard brand={brands[0]} />
      <BrandItemCard brand={brands[0]} />
      <BrandItemCard brand={brands[0]} />
      <BrandItemCard brand={brands[0]} />
    </section>
  );
}

export default BrandsCatalog;