import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Contact,
  ProductDetail,
  ProductList,
  Notfound,
  ContactEu,
  ContactIn,
  ContactUs,
} from "../components/";

export default function MainRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="products" element={<ProductList />}></Route>
        <Route path="productdetails/:id" element={<ProductDetail />}></Route>
        <Route path="*" element={<Notfound />}></Route>
        <Route path="contact" element={<Contact />}>
          <Route path="in" element={<ContactIn />} />
          <Route path="eu" element={<ContactEu />} />
          <Route path="us" element={<ContactUs />} />
        </Route>
      </Routes>
    </>
  );
}
