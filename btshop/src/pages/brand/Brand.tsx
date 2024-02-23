import React from "react";
import { useParams } from "react-router";
import { UseBrandData } from "../../api/UseBrandData";
import '../../styles/style.css';
import Brandinfo from "./shared/brand-info/BrandInfo";
import BrandItemCatalog from "./shared/BrandItemCatalog";

const Brand = () => {
  const { brandArticle } = useParams<{ brandArticle: string }>();
  const brandItem = brandArticle ? UseBrandData.getBrandWithArticle(brandArticle) : undefined;

  return (
    <>
      {brandItem && <Brandinfo brandItem={brandItem} />}
      <BrandItemCatalog />
    </>
  );
}

export default Brand;