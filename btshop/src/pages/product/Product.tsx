import React, { FC } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { IProduct } from "../../api/IProduct";
import ProductSection from "./shared/ProductSectoin";
import '../../styles/style.css';
import './style/style.css';

const Product: FC<{ item: IProduct }> = ({ item }) => {
  return (
    <div>
      <Header />

      <ProductSection productItem={item} />

      {/* ADD CATALOG HERE */}

      <Footer />
    </div>
  );
}

export default Product;