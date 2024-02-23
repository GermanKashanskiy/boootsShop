import { Container, Grid } from "@mui/material";
import React from "react";
import './style/style.css';
import ProductCardItem from "../../../../components/product-card/ProductCardItem";
import { products } from "../../../../api/data/products.data";

const ProductCatalog = () => {
  return (
    <div className="mt-5">
      <Container>

        <div id="catalog-name">You might also like</div>

        <div className="d-flex justify-space-around flex-wrap">
          {
            products.map(product => <ProductCardItem item={product} key={"product-item-"} />)
          }
        </div>
      </Container>
    </div>
  );
}

export default ProductCatalog;