import React, { FC } from "react";
import './product-card-item.css'
import '../../styles/style.css';
import { IProduct } from "../../api/IProduct";
import { Link } from "react-router-dom";

const ProductCardItem: FC<{ item: IProduct }> = ({ item }) => {
  return (
    <div id="card-container" className="m-1 p-1">
      <Link to={"/product/" + item.articul}><img src={'/DB/products/' + item.articul + '/' + item.image[0]} alt={item.name} /></Link>
      <div className="d-flex dir-column text-left font-archivo">
        <a href={item.brand.page}><div id="item-brand">{item.brand.name}</div></a>
        <Link to={"/product/" + item.articul}><div id="item-name">{item.name}</div></Link>
      </div>
    </div>
  );
}

export default ProductCardItem;