import React, { FC } from "react";
import { IBrand } from "../../../api/IBrand";
import './BrandItem.css'
import { SvgIcon } from "@mui/material";

const BrandItem: FC<{ brand: IBrand }> = ({ brand }) => {
    return (
        <div className="brand-item">
            <a href={brand.page}>
                <div className="brand-info">
                    <div className="brand-info-text">
                        <div className="brand-name">{brand.name}</div>
                        <div className="brand-coll-ammount">{brand.collections} COLLECTIONS</div>
                    </div>
                    <div className="brand-logo">
                        <img src={brand.logo} alt={brand.name} />
                    </div>
                </div>
                <div className="brand-img">
                    <img src={brand.image} alt={brand.name} />
                </div>
            </a>
        </div>
    );
}

export default BrandItem;