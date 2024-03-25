import { Routes, Route, useLocation, Navigate } from "react-router-dom";
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
import { GetAuthorizedAccount } from "./AuthAccount";
import Cart from "../pages/cart/Cart";
import Order from "../pages/order/Order";
import Profile from "../pages/profile/Profile";

export const AuthContext = React.createContext({
  isAuthenticated: false,
  setIsAuthenticated: (value: boolean) => { },
});

export const Router = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authAccount] = useState(GetAuthorizedAccount);
  const location = useLocation();

  useEffect(() => {
    if (authAccount != null) {
      setIsAuthenticated(true)
    }
    else {
      setIsAuthenticated(false)
    }
  }, [authAccount])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="products" element={<Products />} />
          <Route path="product/:article" element={<Product />} />
          <Route path="brands" element={<Brands />} />
          <Route path="brands/:brandArticle" element={<Brand />} />
          <Route path="sign-in" element={isAuthenticated ? <Navigate to="/profile" /> : <Login />} />
          <Route path="sign-up" element={<Register />} />
          <Route path="cart" element={<Cart />} />
          <Route path="order" element={!isAuthenticated ? <Navigate to="/sign-in" /> : <Order />} />
          <Route path="profile" element={!isAuthenticated ? <Navigate to="/sign-in" /> : <Profile />} />
          <Route path="*" element={<ErrorBoundary />} />
        </Route>
      </Routes>
    </AuthContext.Provider>
  );
};

export default Router;