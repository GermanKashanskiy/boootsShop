import React from "react";
import { useParams } from "react-router";
import '../../styles/style.css';
import Brandinfo from "./shared/brand-info/BrandInfo";
import BrandItemCatalog from "./shared/BrandItemCatalog";
import { UseBrandWithArticleQuery } from "../../api/brand/UseBrandQuery";

const Brand = () => {
  const { brandArticle } = useParams<{ brandArticle: string }>();
  const { data: brandItem /*, isLoading, isError */ } = UseBrandWithArticleQuery(brandArticle);

  return (
    <>
      {brandItem && <Brandinfo brandItem={brandItem} />}
      {brandItem && <BrandItemCatalog brandArticle={brandItem?.articul} />}
    </>
  );
}

export default Brand;