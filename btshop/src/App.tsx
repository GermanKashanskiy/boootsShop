import React from 'react';
import Home from './pages/home/Home';
import Product from './pages/product/Product';
import { products } from './api/data/products.data';
import { Outlet } from 'react-router';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
