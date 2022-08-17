import React, { useState } from "react";
import TodoHeader from "./TodoHeader";
import TodoBody from "./TodoBody";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    if (!newTodo.text) {
      return;
    }

    const newTodos = [newTodo, ...todos];

    setTodos(newTodos);
  };

  return (
    <header>
      <h1>Task List 2022</h1>
      <TodoHeader addTodo={addTodo} />
      <br />
      <hr />
      <br />
      <br />
      <TodoBody todos={todos} />
    </header>
  );
}
