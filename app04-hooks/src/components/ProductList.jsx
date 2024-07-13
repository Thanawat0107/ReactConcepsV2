import React from "react";
import { useEffect, useState } from "react";
import "./ProductList.css";

export default function ProductList() {
  const [Products, setProducts] = useState();
  const [Count, setCount] = useState(0);
  const [Url, setUrl] = useState("http://localhost:3000");
  const fetchUrl = () => {
    fetch(Url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setCount(data.length);
      })
      .catch((e) => console.log("Not found"));
  }

  useEffect(() => {
    fetchUrl()
    console.log(19);
  }, [fetchUrl]);
  return (
    <>
      <div className="product-list">
        <div>
          <h2>{Count}</h2>
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
