import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="navigation d-flex justify-space-around flex-wrap">
            <Link to="/"><div className="color-black font-archivo">HOME</div></Link>
            <Link to="/products/"><div className="color-black font-archivo">ALL PRODUCTS</div></Link>
            <Link to="/catalog"><div className="color-black font-archivo">CATALOG</div></Link>
            <Link to="/brands/"><div className="color-black font-archivo">BRANDS</div></Link>
        </div>
    )
}

export default Nav;