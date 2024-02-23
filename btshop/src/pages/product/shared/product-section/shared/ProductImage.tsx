import React, { FC } from "react";
import { IProduct } from "../../../../../api/product/IProduct";

const ProductImage: FC<{ productItem: IProduct, imgNumber: number }> = ({ productItem, imgNumber }) => {
  return (
    <div id="product-image" className="mt-1">
      <img src={`/DB/products/${productItem.articul}/${productItem.image[imgNumber]}`} alt={productItem.name} />
    </div>
  );
}

export default ProductImage;
