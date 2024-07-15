import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {Home, Header, Contact ,ProductDetail, ProductList} from "./components/";

export default function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="products" element={<ProductList/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
        <Route path="productdetails/:id" element={<ProductDetail/>}></Route>
      </Routes>
    </>
  )
}
