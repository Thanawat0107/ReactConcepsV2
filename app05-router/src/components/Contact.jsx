import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export default function Contact() {
  const navigate = useNavigate();

  return (
    <>
      <Outlet/>
      <button onClick={()=>navigate("/")}>goto home</button>
    </>
  )
}
