import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={()=>navigate("/")}>goto home</button>
    </>
  )
}
