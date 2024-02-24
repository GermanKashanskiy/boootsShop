import { Container } from "@mui/material";
import React, { FC } from "react";
import ProductCardItem from "../../../components/product-card/ProductCardItem";
import { UseProductWithBrand } from "../../../api/product/UseProductData";

const BrandItemCatalog: FC<{ brandArticle: string }> = ({ brandArticle }) => {

  return (
    <section id="brand-item-catalog" className="mt-5">
      <Container>
        <div className="d-flex flex-wrap justify-center">
          {
            UseProductWithBrand(brandArticle).map((product) => (<ProductCardItem item={product} key={product.articul} />))
          }
        </div>
      </Container>
    </section>
  );
}

export default BrandItemCatalog;

