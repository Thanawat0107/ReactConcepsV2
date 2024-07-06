import React from "react";
import { useState } from "react";

export default function App() {
  //props
  const [number, setNumder] = useState(1);
  //สร้างเป็น ฟังก์ชันเรียกใช้งาน
  const Add = () => {
    setNumder(number + 1);
  };
  const DeletE = () => setNumder(number - 1);
  const Resset = () => setNumder(0);
  //เรียกใช้ฟังก์ชันจาก const Add,DeletE,Reset
  return (
    <div>
      <p>{number}</p>
      <button className="btn" onClick={Add}>
        Add
      </button>
      <button className="btn" onClick={DeletE}>
        Delete
      </button>
      <button className="btn" onClick={Resset}>
        Resset
      </button>
    </div>
  );
}