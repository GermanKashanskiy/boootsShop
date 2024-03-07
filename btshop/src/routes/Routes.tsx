import { Routes, Route, useLocation } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import App from "../App";
import Home from "../pages/home/Home";
import Product from "../pages/product/Product";
import ErrorBoundary from "../pages/404/ErrorBoundary";
import Brand from "../pages/brand/Brand";
import Brands from "../pages/brands/Brands";
import Products from "../pages/products/Products";
import Catalog from "../pages/catalog/Catalog";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

export const AuthContext = React.createContext({
  isAuthenticated: false,
  setIsAuthenticated: (value: boolean) => { }
});

export const Router = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="catalog/:pageNum" element={<Catalog />} />
          <Route path="products" element={<Products />} />
          <Route path="product/:article" element={<Product />} />
          <Route path="brands" element={<Brands />} />
          <Route path="brands/:brandArticle" element={<Brand />} />
          <Route path="sign-in" element={<Login />} />
          <Route path="sign-up" element={<Register />} />
          <Route path="*" element={<ErrorBoundary />} />
        </Route>
      </Routes>
    </AuthContext.Provider>
  );
};

export default Router;
