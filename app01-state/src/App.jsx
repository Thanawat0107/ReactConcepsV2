import React from 'react'
import { useState } from 'react'
import Header from './component/Header'
import StudenList from './component/StudentList'

export default function App() {
  //เรียกใช้ component Header, StudenList 
  return (
    <div className='container'>
      <Header/>
      <StudenList/>
    </div>
  )
}
