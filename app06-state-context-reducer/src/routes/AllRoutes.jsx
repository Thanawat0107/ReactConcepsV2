import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { AddProducts, Cart  } from '../components/index';

export default function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Cart />}></Route>
        <Route path='/addProducts' element={<AddProducts />}></Route>
      </Routes>
    </>
  )
}
