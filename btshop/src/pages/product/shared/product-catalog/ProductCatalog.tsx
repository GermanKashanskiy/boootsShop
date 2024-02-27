import { Container } from "@mui/material";
import React from "react";
import './style/style.css';
import ProductCardItem from "../../../../components/product-card/ProductCardItem";
import { UseAllProducts, UseProductsListWithProductsAmmount } from "../../../../api/product/UseProductData";

const ProductCatalog = () => {
  return (
    <div className="mt-5">
      <Container>

        <div id="catalog-name">You might also like</div>

        <div className="d-flex justify-space-around flex-wrap">
          {
            UseProductsListWithProductsAmmount(4, UseAllProducts()).map(product => (
              <ProductCardItem item={product} key={product.articul} />
            ))
          }
        </div>
      </Container>
    </div>
  );
}

export default ProductCatalog;