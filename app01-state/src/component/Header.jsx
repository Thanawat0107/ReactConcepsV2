import React from "react";
import Logo from "../Images/logo-shopping.png";
import "./Header.css";

export default function Header() {
  return (
    <nav>
      <img src={Logo} alt="logo" className="logo" />
      <a href="/">Home</a>
    </nav>
  );
}
