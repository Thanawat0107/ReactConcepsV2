import React from "react";
import "./AddForm.css";
import { useState } from "react";

export default function AddForm(props) {
  const {dataStudent, setDataStudent} = props;
  const [name, setName] = useState("");
  const [gender, setGender] = useState();
  const submit = (e)=>{
    e.preventDefault();
    if(!name){
      alert("Not found!");
    }else{
       //object
       const newStudent = {
        //property
        id:Math.floor(Math.random()*1000),
        name:name,
        gender:gender
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
        <select value={gender} onChange={(e)=>setGender(e.target.value)} 
        className="form-select mb-3" aria-label="Default select example">
          <option defaultValue>Open this select menu</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
}
