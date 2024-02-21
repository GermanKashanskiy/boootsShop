import React from "react";
import Footer from "../../components/footer/Footer";
import './style/style.css';
import '../../styles/style.css';
import Header from "../../components/header/Header";

const ErrorBoundary = () => {
  return (
    <>
      <Header />
      <br />
      <br />
      <div className="no-copy d-flex justify-center">
        <img src="/images/404.jpg" alt="404 img" />
      </div >
      <Footer />
    </>
  );
}

export default ErrorBoundary;