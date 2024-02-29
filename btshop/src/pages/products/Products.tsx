import React from "react";
import NewArrivals from "./shared/NewArivals";
import { Container } from "@mui/material";
import '../../styles/style.css';
import './style/products.css';
import BestSellers from "./shared/BestSellers";
import AllBrands from "./shared/AllBrands";
import Catalog from "./shared/Catalog";

const Products = () => {
  return (
    <>
      <Container>
        <NewArrivals />
        <BestSellers />
        <AllBrands />
        <Catalog />
      </Container>
    </>
  );
}

export default Products;