import React, { FC, useState, useEffect } from "react";
import { IProduct } from "../../../../api/IProduct";
import { Breadcrumbs, Container, Grid, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { BREADCRUMB_SEPARATOR } from './ProductSectionConstants';
import { useProductSectionLogic } from './ProductSectionLogic';
import { Link } from "react-router-dom";
import './style/product-section.css';

const ProductSection: FC<{ productItem: IProduct }> = ({ productItem }) => {

  const { view, imgNumber, orientation, handleChange } = useProductSectionLogic();

  return (
    <section id="prod-section">
      <Container>
        <Breadcrumbs separator={BREADCRUMB_SEPARATOR} style={{ color: "#9e9b98" }} aria-label="breadcrumb" className="no-copy" id="breadcrumb-line">
          <Link to={"/"} style={{ color: "#9e9b98" }}>HOME</Link>
          <Link to={"/brands/"} style={{ color: "#9e9b98" }}>BRANDS</Link>
          <Link to={"/brands/" + productItem.brand.articul} style={{ color: "#9e9b98" }}>{productItem.brand.name}</Link>
          <Typography color="text.primary" style={{ color: "#9e9b98" }}>{productItem.name} / {productItem.articul}</Typography>
        </Breadcrumbs>

        <div id="product-name" className="font-archivo color-black">{productItem.name}</div>

        <Grid container spacing={2} columns={16} className="d-flex items-center justify-center">
          <Grid item xs={16} sm={12} md={2} lg={2}>
            <ToggleButtonGroup className="no-copy item-carousel" orientation={orientation} value={view} exclusive onChange={handleChange}>
              <ToggleButton value="img-1" aria-label="img-1" sx={{ border: "none", borderRadius: "25px" }}>
                <img src={'/DB/products/' + productItem.articul + '/' + productItem.image[0]} alt={productItem.name} />
              </ToggleButton>
              <ToggleButton value="img-2" aria-label="img-2" sx={{ border: "none", borderRadius: "25px" }}>
                <img src={'/DB/products/' + productItem.articul + '/' + productItem.image[1]} alt={productItem.name} />
              </ToggleButton>
              <ToggleButton value="img-3" aria-label="img-3" sx={{ border: "none", borderRadius: "25px" }}>
                <img src={'/DB/products/' + productItem.articul + '/' + productItem.image[2]} alt={productItem.name} />
              </ToggleButton>
              <ToggleButton value="img-4" aria-label="img-4" sx={{ border: "none", borderRadius: "25px" }}>
                <img src={'/DB/products/' + productItem.articul + '/' + productItem.image[3]} alt={productItem.name} />
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid>

          <Grid item xs={16} sm={12} md={9} lg={8}>
            <div id="product-image" className="mt-1">
              <img src={'/DB/products/' + productItem.articul + '/' + productItem.image[imgNumber]} alt={productItem.name} />
            </div>
          </Grid>

          <Grid item xs={16} sm={12} md={10} lg={6}>
            <div id="product-info" className="mt-2">
              <div id="container-title" className="color-black font-archivo">ABOUT ITEM</div>
              <hr className="mt-1 mb-1" />
              <div className="color-black font-archivo mt-1">
                <div className="description-part">Article</div>
                <div className="part-text">{productItem.articul}</div>
              </div>
              <div className="color-black font-archivo mt-1">
                <div className="description-part">Brand, manufacturer</div>
                <div className="part-text">{productItem.brand.name} / {productItem.brand.articul}</div>
              </div>
              <div className="color-black font-archivo mt-1">
                <div className="description-part">Description</div>
                <div className="part-text">{productItem.description}</div>
              </div>
            </div>
            <div id="product-price-container" className="color-black font-archivo d-flex justify-space-between items-center mt-5">
              <div id="product-price"><span>&#36;</span>{productItem.price}</div>
              <button>Add to cart</button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default ProductSection;