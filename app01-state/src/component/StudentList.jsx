import React from "react";
import { useState } from "react";

export default function StudenList(props) {
  const [show, setShow] = useState(false);
  const {dataStudent, deletEStudent} = props;

  //สร้างฟังก์ชัน table
  const table = () => (
    <table className="table table-hover">
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
              <button
                onClick={() => deletEStudent(item.id)}
                type="button"
                className="btn btn-danger">
                Delete
              </button>
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );
  //เรียกใช้งานฟังก์ชัน table
  return (
    <div>
      <h1>StudentsQuantity({dataStudent.length})</h1>
      <button onClick={() => setShow(!show)}>{show ? "Hiden" : "Show"}</button>
      {show && table()}
    </div>
  );
}
