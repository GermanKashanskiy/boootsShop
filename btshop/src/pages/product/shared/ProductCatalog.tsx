import { Container, Grid } from "@mui/material";
import React from "react";
import ProductCardItem from "../../../components/product-card/ProductCardItem";
import { products } from "../../../api/data/products.data";

const ProductCatalog = () => {
  return (
    <div className="mt-5">
      <Container>

        <div id="catalog-name">You might also like</div>

        <div className="d-flex justify-space-around flex-wrap">
          <ProductCardItem item={products[0]} />
          <ProductCardItem item={products[1]} />
          <ProductCardItem item={products[2]} />
          <ProductCardItem item={products[3]} />
        </div>
      </Container>
    </div>
  );
}

export default ProductCatalog;