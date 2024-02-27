import { Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import App from "../App";
import Home from "../pages/home/Home";
import Product from "../pages/product/Product";
import ErrorBoundary from "../pages/404/ErrorBoundary";
import Brand from "../pages/brand/Brand";
import Brands from "../pages/brands/Brands";
import Products from "../pages/products/Products";

export const AuthContext = React.createContext({
  isAuthenticated: false,
  setIsAuthenticated: (value: boolean) => { }
});


export const Router = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="product/:article" element={<Product />} />
          <Route path="brands" element={<Brands />} />
          <Route path="brands/:brandArticle" element={<Brand />} />
          {/*<Route path="login" element={<Login />} />*/}
          <Route path="*" element={<ErrorBoundary />} />
        </Route>
      </Routes>
    </AuthContext.Provider>
  );
};

export default Router;

