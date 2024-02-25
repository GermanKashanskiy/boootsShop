import React, { FC } from "react";
import './style/BrandItemCard.css';
import '../../styles/style.css';
import { Link } from "react-router-dom";
import { IBrand } from "../../api/brand/IBrand";

const BrandItemCard: FC<{ brand: IBrand }> = ({ brand }) => {
    return (
        <div id="brand-item" className="p-1 m-1n5">
            <Link to={"/brands/" + brand.articul} className="font-archivo color-black">
                <div className="d-flex items-center justify-space-between">
                    <div id="brand-info-text" className=" text-left">
                        <div id="brand-name">{brand.name}</div>
                        <div id="brand-coll-ammount">{brand.collections} COLLECTIONS</div>
                    </div>
                    <div id="brand-logo" className="text-right">
                        <img src={"/DB/brands/" + brand.articul + "/" + brand.logo} alt={brand.name} />
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default BrandItemCard;