import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="navigation d-flex justify-space-around flex-wrap">
            <Link to="/"><div className="color-black font-archivo">HOME</div></Link>
            <Link to="/"><div className="color-black font-archivo">ALL PRODUCTS</div></Link>
            <Link to="/"><div className="color-black font-archivo">NEW ARRIVALS</div></Link>
            <Link to="/"><div className="color-black font-archivo">COLLECTIONS</div></Link>
            <Link to="/"><div className="color-black font-archivo">BRANDS</div></Link>
            <Link to="/"><div className="color-black font-archivo">OFFERS</div></Link>
        </div>
    )
}

export default Nav;