import React from "react";

const FooterSection = () => {
  return (
    <div className="footer-section-container mlr-5vw d-flex justify-space-around flex-wrap">
      <div className="grid-item m-1 d-flex dir-column items-start font-archivo">
        <div className="top-text">
          FOLLOW US
        </div>
        <a href="" className="font-archivo color-black no-text-decoration">FACEBOOK</a>
        <a href="" className="font-archivo color-black no-text-decoration">INSTAGRAM</a>
        <a href="" className="font-archivo color-black no-text-decoration">TELEGRAM</a>
        <a href="" className="font-archivo color-black no-text-decoration">LINKEDIN</a>
      </div>
      <div className="grid-item m-1 d-flex dir-column items-start font-archivo">
        <div className="top-text">
          COMPANY
        </div>
        <a href="" className="font-archivo color-black no-text-decoration">CONTACT US</a>
        <a href="" className="font-archivo color-black no-text-decoration">FAQ'S</a>
        <a href="" className="font-archivo color-black no-text-decoration">ORDER LOOKUP</a>
        <a href="" className="font-archivo color-black no-text-decoration">RETURNS</a>
      </div>
      <div className="grid-item m-1 d-flex dir-column items-start font-archivo">
        <div className="top-text">
          ABOUT US
        </div>
        <a href="" className="font-archivo color-black no-text-decoration">CAREERS</a>
        <a href="" className="font-archivo color-black no-text-decoration">NEWS&BLOG</a>
        <a href="" className="font-archivo color-black no-text-decoration">PRESS CENTER</a>
        <a href="" className="font-archivo color-black no-text-decoration">SUPPLIERS</a>
      </div>
      <div className="grid-item m-1 d-flex dir-column items-start font-archivo">
        <div className="top-text">
          CONTACT
        </div>
        <a href="" className="font-archivo color-black no-text-decoration">
          COMPANY@EMAIL.COM
        </a>
        <a href="" className="font-archivo color-black no-text-decoration">
          +123(23)-789-1234
        </a>
      </div>
    </div>
  );
}

export default FooterSection;