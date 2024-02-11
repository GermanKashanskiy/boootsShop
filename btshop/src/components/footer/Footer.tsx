import React from "react";
import "./Footer.css";
import FooterNav from "./shared/FooterNav";
import FooterLogo from "./shared/FooterLogo";
import FooterSection from "./shared/FooterSection";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <FooterSection />
        <hr />
        <FooterNav />
        <hr />
        <FooterLogo />
      </div>
    </footer>
  );
};

export default Footer;
