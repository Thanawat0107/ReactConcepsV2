import React from 'react'
import { useState } from 'react'
import Header from './component/Header'
import StudenList from './component/StudentList'
//
export default function App() {
  //เรียกใช้ component Header, StudenList
  //ส่ง props ไปทำงานที่ component Header
  return (
    <div className='container'>
      <Header title="Home" major="Comcience"/>
      <StudenList/>
    </div>
  )
}
