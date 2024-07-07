import React from "react";
import "./AddForm.css";
import { useState } from "react";

export default function AddForm(props) {
  const {dataStudent, setDataStudent} = props;
  const [name, setName] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if(!name){
      alert("test");
    }else{
       //object
       const newStudent = {
        //property
        id:Math.floor(Math.random()*1000),
        name:name
    }
    setDataStudent([...dataStudent, newStudent]);
    setName("");
  }
}
  return (
    <form onSubmit={submit}>
      <div className="container">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} 
            className="form-control"/>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
}
