import React from "react";
import "./style/Footer.css";
import '../../styles/style.css';
import FooterNav from "./shared/FooterNav";
import FooterLogo from "./shared/FooterLogo";
import FooterSection from "./shared/FooterSection";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <FooterSection />
        <hr className="mlr-5vw" />
        <FooterNav />
        <hr className="mlr-5vw" />
        <FooterLogo />
      </div>
    </footer>
  );
};

export default Footer;
