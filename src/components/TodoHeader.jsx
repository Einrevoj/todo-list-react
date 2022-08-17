import React, { useState } from "react";

export default function TodoHeader({ addTodo }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo({
      id: Math.floor(Math.random() * 1000000),
      text: input,
    });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <div>
        <input
          id="new-task-input"
          type="text"
          value={input}
          name="text"
          className="todo-input"
          onChange={(e) => setInput(e.target.value)}
          placeholder="What do you have planned?"
          style={{ width: "600px" }}
        />
        <button id="new-task-submit">Add todo</button>
      </div>
    </form>
  );
}
