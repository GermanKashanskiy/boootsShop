import React, { FC } from "react";
import { IProduct } from "../../../../../api/product/IProduct";

const ProductInfo: FC<{ productItem: IProduct }> = ({ productItem }) => {
  return (
    <>
      <div id="product-info" className="mt-2">
        <div id="container-title" className="color-black font-archivo">ABOUT ITEM</div>
        <hr className="mt-1 mb-1" />
        <div className="color-black font-archivo mt-1">
          <div className="description-part">Article</div>
          <div className="part-text">{productItem.articul}</div>
        </div>
        <div className="color-black font-archivo mt-1">
          <div className="description-part">Brand, manufacturer</div>
          <div className="part-text">{productItem.brand.name} / {productItem.brand.articul}</div>
        </div>
        <div className="color-black font-archivo mt-1">
          <div className="description-part">Description</div>
          <div className="part-text">{productItem.description}</div>
        </div>
      </div>
      <div id="product-price-container" className="color-black font-archivo d-flex justify-space-between items-center mt-5">
        <div id="product-price"><span>&#36;</span>{productItem.price}</div>
        <button>Add to cart</button>
      </div>
    </>
  );
}

export default ProductInfo;