import React, { FC } from "react";
import ProductSection from "./shared/product-section/ProductSectoin";
import '../../styles/style.css';
import ProductCatalog from "./shared/product-catalog/ProductCatalog";
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