import React, { FC } from "react";
import './product-card-item.css'
import '../../styles/style.css';
import { IProduct } from "../../api/IProduct";

const ProductCardItem: FC<{ item: IProduct }> = ({ item }) => {
  return (
    <div id="card-container" className="m-1 p-1">
      <a href={item.page}><img src={'/DB/products/' + item.articul + '/' + item.image[0]} alt={item.name} /></a>
      <div className="d-flex dir-column text-left font-archivo">
        <a href={item.brand.page}><div id="item-brand">{item.brand.name}</div></a>
        <a href={item.page}><div id="item-name">{item.name}</div></a>
      </div>
    </div>
  );
}

export default ProductCardItem;