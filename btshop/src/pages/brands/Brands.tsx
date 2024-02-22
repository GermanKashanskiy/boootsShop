import React from "react";
import '../../styles/style.css';
import './style/brands.css';
import { Container } from "@mui/material";
import BrandsCatalog from "./shared/BrandsCatalog";

const Brands = () => {
  return (
    <>
      <Container>
        <div id="page-title" className="font-archivo text-center mt-5">
          BRANDS
        </div>
        <BrandsCatalog />
      </Container>
    </>
  );
}

export default Brands;