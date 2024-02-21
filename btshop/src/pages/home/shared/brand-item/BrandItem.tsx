import React, { FC } from "react";
import { IBrand } from "../../../../api/IBrand";
import './BrandItem.css'
import { SvgIcon } from "@mui/material";
import { Link } from "react-router-dom";

const BrandItem: FC<{ brand: IBrand }> = ({ brand }) => {
    return (
        <div className="brand-item">
            <Link to={"/brands/" + brand.articul}>
                <div className="brand-info">
                    <div className="brand-info-text">
                        <div className="brand-name">{brand.name}</div>
                        <div className="brand-coll-ammount">{brand.collections} COLLECTIONS</div>
                    </div>
                    <div className="brand-logo">
                        <img src={"/DB/brands/" + brand.articul + "/" + brand.logo} alt={brand.name} />
                    </div>
                </div>
                <div className="brand-img">
                    <img src={"/DB/brands/" + brand.articul + "/" + brand.image} alt={brand.name} />
                </div>
            </Link>
        </div>
    );
}

export default BrandItem;