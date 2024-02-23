import React, { FC, useEffect, useState } from "react";
import { IProduct } from "../../../../../api/product/IProduct";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import useWindowDimensions from "../../../../shared/UseWindowDimentions";

export type Orientation = 'vertical' | 'horizontal';

const ProductImageCarousel: FC<{ productItem: IProduct, imgNumber: number, setImgNumber: Function }> = ({ productItem, imgNumber, setImgNumber }) => {

  const { width } = useWindowDimensions();
  const [orientation, setOrientation] = useState<Orientation>(width >= 900 ? 'vertical' : 'horizontal');

  useEffect(() => {
    const newOrientation = width >= 900 ? 'vertical' : 'horizontal';
    setOrientation(newOrientation);
  }, [width]);

  const handleChange = (event: React.MouseEvent<HTMLElement>, nextImgNumber: number) => {
    setImgNumber(nextImgNumber);
  };

  return (
    <ToggleButtonGroup className="no-copy item-carousel" value={imgNumber} orientation={orientation} exclusive onChange={handleChange}>
      {productItem.image.map((image, index) => (
        <ToggleButton key={index} value={index} sx={{ border: "none", borderRadius: "25px" }}>
          <img src={`/DB/products/${productItem.articul}/${image}`} alt={productItem.name} />
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}

export default ProductImageCarousel;
