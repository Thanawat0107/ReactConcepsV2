import React from 'react'
import { useState } from 'react'
import Header from './component/Header'
import StudenList from './component/StudentList'
import AddForm from './component/AddForm';

export default function App() {
  //สร้าง array
  let students = [];

  //นำมาวนลูป
  for (let index = 1; index < 6; index++) {
    let student = {
      id: index,
      name: "Coffee" + index,
    };
    //เอาข้อมูลที่วนลูปมา Add เข้า students โดยใช้ push
    students.push(student);
  }

  //สร้าง state
  const [dataStudent, setDataStudent] = useState(students);

  //ฟังก์ชัน deletEStudent
  const deletEStudent = (id) => {
    setDataStudent(dataStudent.filter((item) => item.id != id));
  };

  //เรียกใช้ component Header, StudenList
  //ส่ง props ไปทำงานที่ component Header, StudentList
  return (
    <div className='container'>
      <Header title="Home" major="Comcience"/>
      <AddForm dataStudent={dataStudent} setDataStudent={setDataStudent}/>
      <StudenList dataStudent={dataStudent} deletEStudent={deletEStudent}/>
    </div>
  )
}
