import React from "react";
import { useState } from "react";

export default function App() {
  //สร้าง array
  let students = [];

  //นำมาวนลูป
  for (let index = 0; index < 5; index++) {
    let student = {
      id: index,
      name: "Coffee" + index,
    };
    //เอาข้อมูลที่วนลูปมา Add เข้า students
    students.push(student);
  }
  //สร้าง state
  const [dataStudent, setDataStudent] = useState(students);
  //ฟังก์ชัน DeletE
  const deletEStudent = (id) => {
    setDataStudent(dataStudent.filter((item) => item.id != id));
  };
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {dataStudent.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <th>{item.name}</th>
              <th>
                <button onClick={() => deletEStudent(item.id)} type="button" class="btn btn-danger">
                  Danger
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
