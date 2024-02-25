import React from "react";
import ProductSection from "./shared/product-section/ProductSectoin";
import '../../styles/style.css';
import ProductCatalog from "./shared/product-catalog/ProductCatalog";
import { useParams } from "react-router";
import { UseProductWithArticleQuery } from "../../api/product/UseProductQuery";


const Product = () => {
  const { article } = useParams<{ article: string }>();

  const { data: productItem/*, isLoading, isError*/ } = UseProductWithArticleQuery(article);

  /*
  As example how to make loading skeleton

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching product</div>;
  */
  return (
    <>
      {productItem && <ProductSection productItem={productItem} />}
      <ProductCatalog />
    </>
  );
}

export default Product;
