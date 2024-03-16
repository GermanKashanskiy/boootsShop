import React, { FC } from "react";
import './style/product-card-item.css';
import '../../styles/style.css';
import { IProduct } from "../../api/product/IProduct";
import { Link } from "react-router-dom";
import { Skeleton } from "@mui/material";

const ProductCardItem: FC<{ item: IProduct }> = ({ item }) => {
  return (
    <div id="card-container" className="m-1 p-1">
      <Link to={"/product/" + item.articul}>
        {item.image[0] == null ? (<Skeleton variant="rounded" width="100%" height={160} />) : (<img src={'/DB/products/' + item.articul + '/' + item.image[0]} alt={item.name} />)}
      </Link>
      <div className="d-flex dir-column text-left font-archivo">
        <Link to={"/brands/" + item.brand.articul}><div id="item-brand">{item.brand.name}</div></Link>
        <Link to={"/product/" + item.articul}><div id="item-name">{item.name}</div></Link>
      </div>
    </div>
  );
}

export default ProductCardItem;