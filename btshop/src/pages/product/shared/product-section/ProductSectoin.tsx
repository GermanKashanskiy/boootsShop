import React, { FC, useState } from "react";
import { IProduct } from "../../../../api/product/IProduct";
import { Container, Grid } from "@mui/material";
import ProductBreadcrumbs from "./shared/ProductBreadcrumbs";
import ProductImageCarousel from "./shared/ProductImageCarousel";
import ProductImage from "./shared/ProductImage";
import ProductInfo from "./shared/ProductInfo";
import './style/product-section.css';
import '../../../../styles/style.css';

const ProductSection: FC<{ productItem: IProduct }> = ({ productItem }) => {
  const [imgNumber, setImgNumber] = useState<number>(0);

  return (
    <section id="prod-section">
      <Container>
        <ProductBreadcrumbs productItem={productItem} />

        <Grid container spacing={2} columns={16} className="d-flex items-center justify-center">
          <Grid item xs={16} sm={12} md={2} lg={2}>
            <ProductImageCarousel productItem={productItem} imgNumber={imgNumber} setImgNumber={setImgNumber} />
          </Grid>

          <Grid item xs={16} sm={12} md={9} lg={8}>
            <ProductImage productItem={productItem} imgNumber={imgNumber} />
          </Grid>

          <Grid item xs={16} sm={12} md={10} lg={6}>
            <ProductInfo productItem={productItem} />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default ProductSection;
