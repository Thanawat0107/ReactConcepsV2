import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
  const getId = useParams();
  return (
    <div>
      ProductDetail {getId.id} && <h1>ตูดส่งมา...!!! {getId.id}
      </h1>
    </div>
  )
}
