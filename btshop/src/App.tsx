import React from 'react';
import Home from './pages/home/Home';
import Product from './pages/product/Product';
import { products } from './api/data/products.data';

function App() {
  return (
    <div>
      <Product item={products[0]} />
    </div>
  );
}

export default App;
