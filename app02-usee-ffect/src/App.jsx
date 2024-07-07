import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState();
  const changeText = ()=>{
  let Temp = count<0 ? "ข้อมูลน้อยกว่า 0 ครับ" : "";
  setText(Temp);
 }
  useEffect(()=>{ //1.แบบไม่กำหนด dependency 
    console.log('1.ทำทุกครั้ง state เปลี่ยน');
    changeText();
  });

  useEffect(()=> { //2.แบบกำหนดอาร์เรย์ว่างเปล่า
    console.log('2.ทำครั้งแรกและครั้งเดียว state เปลี่ยน' + count);
  }, []);

  useEffect(()=>{ //3.แบบกำหนด dependency 
    console.log('3.ทำครั้งแรกและเมื่อเงื่อนไขมีการเปลี่ยนค่า state เปลี่ยน' + count);
  }, [count>10, text]);
  
  //ฟังก์ชัน add,deletE,reSet
  const add = () => {
    setCount(count+1);
  }
  const deletE = () => {
    setCount(count-1);
  }
  const reSet = ()=> {
    setCount(0);
    setText(" ");
  }
  return (
    <>
      <div className='container'>
        <h1>{text}</h1>
        <h1>{count}</h1>
          <button type='button' className='btn' onClick={()=>add()}>Add</button>
          <button type='button' className='btn'  onClick={()=>deletE()}>Delete</button>
          <button type='button' className='btn'  onClick={()=>reSet()}>Reset</button>
      </div>
    </>
  ) 
}
