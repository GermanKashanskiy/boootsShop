import React from "react";
import { UseAllProducts, UseProductAmount } from "../../api/product/UseProductData";
import ProductCardItem from "../../components/product-card/ProductCardItem";
import { Container } from "@mui/material";

const Catalog = () => {

  return (
    <>
      <Container>
        <div className="d-flex justify-center flex-wrap">
          {
            UseAllProducts().map(product => (
              <ProductCardItem item={product} key={product.articul} />
            )).slice(0, UseProductAmount())
          }
        </div>
      </Container>
    </>
  );
}

export default Catalog;
