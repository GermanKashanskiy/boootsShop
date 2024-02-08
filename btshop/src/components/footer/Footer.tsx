import React from "react";
import './Footer.css'
import FooterNav from "./FooterNav";
import FooterLogo from "./FooterLogo";
import FooterSection from "./FooterSection";

const Footer = () => {
  return (
    <div className="footer-container">
      <FooterSection />
      <hr />
      <FooterNav />
      <hr />
      <FooterLogo />
    </div>
  );
}

export default Footer;