import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Tables from "../components/Tables";
import Forms from "../components/Forms";
import TodoList from "../components/TodoList";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/tables" element={<Tables />}></Route>
      <Route path="/forms" element={<Forms />}></Route>
      <Route path="/todolist" element={<TodoList />}></Route>
    </Routes>
  );
}
