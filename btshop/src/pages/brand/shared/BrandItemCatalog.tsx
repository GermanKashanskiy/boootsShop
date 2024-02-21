import { Container } from "@mui/material";
import React from "react";
import ProductCardItem from "../../../components/product-card/ProductCardItem";
import { products } from "../../../api/data/products.data";

const BrandItemCatalog = () => {
  return (
    <section id="brand-item-catalog" className="mt-5">
      <Container>
        <div className="d-flex flex-wrap">
          <ProductCardItem item={products[0]} />
          <ProductCardItem item={products[0]} />
          <ProductCardItem item={products[0]} />
          <ProductCardItem item={products[0]} />
          <ProductCardItem item={products[0]} />
          <ProductCardItem item={products[0]} />
          <ProductCardItem item={products[0]} />
          <ProductCardItem item={products[0]} />

          <ProductCardItem item={products[0]} />
          <ProductCardItem item={products[0]} />
          <ProductCardItem item={products[0]} />
          <ProductCardItem item={products[0]} />
          <ProductCardItem item={products[0]} />
          <ProductCardItem item={products[0]} />
          <ProductCardItem item={products[0]} />
          <ProductCardItem item={products[0]} />
          <ProductCardItem item={products[0]} />
          <ProductCardItem item={products[0]} />
          <ProductCardItem item={products[0]} />
          <ProductCardItem item={products[0]} />
          <ProductCardItem item={products[0]} />
          <ProductCardItem item={products[0]} />
          <ProductCardItem item={products[0]} />
          <ProductCardItem item={products[0]} />
          <ProductCardItem item={products[0]} />
          <ProductCardItem item={products[0]} />
          <ProductCardItem item={products[0]} />
          <ProductCardItem item={products[0]} />
          <ProductCardItem item={products[0]} />
          <ProductCardItem item={products[0]} />
          <ProductCardItem item={products[0]} />
          <ProductCardItem item={products[0]} />
          <ProductCardItem item={products[0]} />
          <ProductCardItem item={products[0]} />
          <ProductCardItem item={products[0]} />
          <ProductCardItem item={products[0]} />
          <ProductCardItem item={products[0]} />
          <ProductCardItem item={products[0]} />
          <ProductCardItem item={products[0]} />
          <ProductCardItem item={products[0]} />
          <ProductCardItem item={products[0]} />
          <ProductCardItem item={products[0]} />
          <ProductCardItem item={products[0]} />
          <ProductCardItem item={products[0]} />
          <ProductCardItem item={products[0]} />
          <ProductCardItem item={products[0]} />
          <ProductCardItem item={products[0]} />
          <ProductCardItem item={products[0]} />
          <ProductCardItem item={products[0]} />
          <ProductCardItem item={products[0]} />
          <ProductCardItem item={products[0]} />
          <ProductCardItem item={products[0]} />
          <ProductCardItem item={products[0]} />
          <ProductCardItem item={products[0]} />
          <ProductCardItem item={products[0]} />
          <ProductCardItem item={products[0]} />

        </div>
      </Container>
    </section>
  );
}

export default BrandItemCatalog;