import React, { FC } from "react";
import { IProduct } from "../../../../../api/product/IProduct";
import { Skeleton } from "@mui/material";
import { Link } from "react-router-dom";

const OrderItem: FC<{ item: IProduct }> = ({ item }) => {
  return (
    <div style={{ width: "10%" }}>
      <Link to={"/product/" + item.articul}>
        {item.image[0] == null ? (<Skeleton variant="rounded" width="100%" height={160} />) : (<img src={'/DB/products/' + item.articul + '/' + item.image[0]} alt={item.name} />)}
      </Link>
    </div>
  );
}

export default OrderItem;