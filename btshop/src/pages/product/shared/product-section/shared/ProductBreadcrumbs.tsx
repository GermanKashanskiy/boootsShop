import { Breadcrumbs, Typography } from "@mui/material";
import React, { FC } from "react";
import { BREADCRUMB_SEPARATOR } from "./ProductSectionConstants";
import { Link } from "react-router-dom";
import { IProduct } from "../../../../../api/product/IProduct";

const ProductBreadcrumbs: FC<{ productItem: IProduct }> = ({ productItem }) => {
  return (
    <>
      <Breadcrumbs separator={BREADCRUMB_SEPARATOR} style={{ color: "#9e9b98" }} aria-label="breadcrumb" className="no-copy" id="breadcrumb-line">
        <Link to={"/"} style={{ color: "#9e9b98" }}>HOME</Link>
        <Link to={"/brands/"} style={{ color: "#9e9b98" }}>BRANDS</Link>
        <Link to={"/brands/" + productItem.brand.articul} style={{ color: "#9e9b98" }}>{productItem.brand.name}</Link>
        <Typography color="text.primary" style={{ color: "#9e9b98" }}>{productItem.name} / {productItem.articul}</Typography>
      </Breadcrumbs>
    </>
  );
}

export default ProductBreadcrumbs;