import React, { useEffect, useRef, useState } from "react";

export default function TodoHeader({ edit, onSubmit }) {
  const [input, setInput] = useState(edit ? edit.value : "");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      id: Math.floor(Math.random() * 100000),
      text: input,
    });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      {edit ? (
        <div>
          <input
            id="new-task-input"
            value={input}
            ref={inputRef}
            onChange={(e) => setInput(e.target.value)}
            name="text"
            className="todo-input edit"
            style={{ width: "600px" }}
          />
          <button id="new-task-submit" onClick={handleSubmit}>
            Update todo
          </button>
        </div>
      ) : (
        <div>
          <input
            id="new-task-input"
            type="text"
            value={input}
            ref={inputRef}
            onChange={(e) => setInput(e.target.value)}
            name="text"
            className="todo-input edit"
            style={{ width: "600px" }}
            placeholder="What do you have planned?"
          />
          <button id="new-task-submit">Add todo</button>
        </div>
      )}
    </form>
  );
}
