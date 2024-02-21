import React, { FC } from "react";
import ProductSection from "./shared/ProductSectoin";
import '../../styles/style.css';
import './style/style.css';
import ProductCatalog from "./shared/ProductCatalog";
import { useParams } from "react-router";
import { UseProductData } from "../../api/UseProductData";

const Product = () => {
  const { article } = useParams<{ article: string }>();
  const productItem = article ? UseProductData.getProductWithArticle(article) : undefined;

  return (
    <>
      {productItem && <ProductSection productItem={productItem} />}
      <ProductCatalog />
    </>
  );
}

export default Product;