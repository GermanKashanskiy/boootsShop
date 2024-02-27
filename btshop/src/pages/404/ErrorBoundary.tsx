import React from "react";
import Footer from "../../components/footer/Footer";
import '../../styles/style.css';
import Header from "../../components/header/Header";

const ErrorBoundary = () => {
  return (
    <>
      <br />
      <br />
      <div className="no-copy d-flex justify-center">
        <img src="/images/404.jpg" alt="404 img" style={{ width: "30%" }} />
      </div >
    </>
  );
}

export default ErrorBoundary;