import React from "react";
import { useEffect, useState } from "react";
import "./ProductList.css";

export default function ProductList() {
  const [Products, setProducts] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((e) => console.log("Not found"));
  }, []);
  return (
    <div className="product-list">
      {Products &&
        Products.map((products) => (
          <div className="product-card" key={products.id}>
            <div className="product-id">{products.id}</div>
            <div className="product-details">
              <h2>{products.name}</h2>
              <p>${products.price}</p>
              <span className="product-status">
                {products.in_stock ? "In Stock" : "Unvaliable"}k
              </span>
            </div>
          </div>
        ))}
    </div>
  );
}
