import React, { FC } from "react";
import { IBrand } from "../../../api/IBrand";
import { Breadcrumbs, Container, Typography } from "@mui/material";
import { BREADCRUMB_SEPARATOR } from "./BrandSectionConstants";
import { Link } from "react-router-dom";

const Brandinfo: FC<{ brandItem: IBrand }> = ({ brandItem }) => {
  return (
    <section id="brand-info">
      <Container>
        <Breadcrumbs separator={BREADCRUMB_SEPARATOR} style={{ color: "#9e9b98" }} aria-label="breadcrumb" className="no-copy" id="breadcrumb-line">
          <Link to={"/"} style={{ color: "#9e9b98" }}>HOME</Link>
          <Typography color="text.primary" style={{ color: "#9e9b98" }}>{brandItem.name} / {brandItem.articul}</Typography>
        </Breadcrumbs>

        <div className="d-flex justify-space-between">
          <div id="brand-name" className="font-archivo color-black">{brandItem.name}</div>

          <div id="brand-logo" className="d-flex justify-end">
            <img src={"/DB/brands/" + brandItem.articul + "/" + brandItem.logo} alt={brandItem.name} />
          </div>
        </div>

        <div id="collections-info" className="font-archivo color-black">
          Collections on store: {brandItem.collections}
        </div>
      </Container>
    </section>
  );
}

export default Brandinfo;