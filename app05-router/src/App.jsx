import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {Home, ProductDetail, ProductList} from "./components/";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="products" element={<ProductList />}></Route>
        <Route path="products/1001" element={<ProductDetail />}></Route>
      </Routes>
    </>
  )
}
