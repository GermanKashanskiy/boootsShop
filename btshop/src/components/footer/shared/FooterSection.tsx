import { Grid } from "@mui/material";
import React from "react";

const FooterSection = () => {
  return (
    <div className="footer-section-container">
      <div className="grid-item">
        <div className="top-text">
          FOLLOW US
        </div>
        <a href="">FACEBOOK</a>
        <a href="">INSTAGRAM</a>
        <a href="">TELEGRAM</a>
        <a href="">LINKEDIN</a>
      </div>
      <div className="grid-item">
        <div className="top-text">
          COMPANY
        </div>
        <a href="">CONTACT US</a>
        <a href="">FAQ'S</a>
        <a href="">ORDER LOOKUP</a>
        <a href="">RETURNS</a>
      </div>
      <div className="grid-item">
        <div className="top-text">
          ABOUT US
        </div>
        <a href="">CAREERS</a>
        <a href="">NEWS&BLOG</a>
        <a href="">PRESS CENTER</a>
        <a href="">SUPPLIERS</a>
      </div>
      <div className="grid-item">
        <div className="top-text">
          CONTACT
        </div>
        <br />
        COMPANY@EMAIL.COM
        <br />
        <br />
        +123(23)-789-1234
      </div>
    </div>
  );
}

export default FooterSection;