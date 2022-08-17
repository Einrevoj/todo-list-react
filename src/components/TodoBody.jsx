import React from "react";

export default function TodoBody({ todos }) {
  return todos.map((todo, index) => (
    <div id="tasks" key={index}>
      <div className="task">
        <div className="content">{todo.text}</div>
        <div className="actions">
          <button className="edit">Edit</button>
          <button className="delete">Delete</button>
        </div>
      </div>
    </div>
  ));
}
