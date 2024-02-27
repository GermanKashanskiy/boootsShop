import React from "react";
import NewArrivals from "./shared/NewArivals";
import { Container } from "@mui/material";
import '../../styles/style.css';
import './style/products.css';

const Products = () => {
  return (
    <>
      <Container>
        <NewArrivals />
      </Container>
    </>
  );
}

export default Products;