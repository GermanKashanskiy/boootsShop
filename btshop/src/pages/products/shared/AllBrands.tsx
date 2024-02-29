import React from "react";
import { UseAllBrands, UseBrandsListWithBrandsAmount } from "../../../api/brand/UseBrandData";
import BrandItemCard from "../../../components/brand-card/BrandItemCard";
import { Link } from "react-router-dom";

const AllBrands = () => {
  return (
    <div className="mt-4">
      <div className="font-archivo font-900 font-s-3 m-2">ALL BRANDS</div>
      <div className="d-flex justify-center flex-wrap">
        {
          UseBrandsListWithBrandsAmount(4, UseAllBrands()).map(brand => (
            <BrandItemCard brand={brand} key={brand.articul} />
          ))
        }
      </div>
      <div id="section-btn" className="text-center">
        <Link to="/brands" className="font-900">MORE</Link>
      </div>
    </div>
  );
}

export default AllBrands;