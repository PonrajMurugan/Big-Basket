import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Banner from '../Banner/banner';
import Product from '../Smart-Basket/smart-basket';
import ProductDetails from '../Product-details/product-details'
import productsData from '../Products/product.json';

const Main = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname === '/' && <Banner />}
      <Routes>
        <Route path="/" element={
          <div className='product-container-wrapper'>
          <div className='product-container headh'>

            {productsData.map(product => (
              <Product key={product.id} product={product} />
            ))}
          </div>
          </div>
        } />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default Main;



