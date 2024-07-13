import React, { useState  } from "react";
import "./ProductList.css";
import useFerch from "../hooks/useFerch";

export default function ProductList() {
  const [Url, setUrl] = useState("http://localhost:3000");
  const {data: Products} = useFerch(Url);

  return (
    <>
      <div className="product-list">
        <div>
          <h2>{Products && Products.length}</h2>
          <button className="btn" onClick={()=>setUrl("http://localhost:3000/products")}>Load All</button>
          <button className="btn" onClick={()=>setUrl("http://localhost:3000/products?in_stock=true")}>Load In Stock</button>
        </div>
        {Products &&
          Products.map((products) => (
            <div className="product-card" key={products.id}>
              <div className="product-id">{products.id}</div>
              <div className="product-details">
                <h2>{products.name}</h2>
                <p>${products.price}</p>
                <span className="product-status">
                  {products.in_stock == "true" ? "In Stock" : "Unvaliable"}
                </span>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
