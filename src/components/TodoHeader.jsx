import React, { useEffect, useState } from "react";

export default function TodoHeader(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 1000000),
      text: input,
    });
    setInput("");
  };


    return (
      <form onSubmit={handleSubmit} className="new-task-form">
        {props.edit ? (
        <div>
          <input
            id="new-task-input"
            type="text"
            value={input}
            ref={inputRef}
            name="text"
            className="todo-input"
            onChange={(e) => setInput(e.target.value)}
            placeholder="What do you have planned?"
            style={{ width: "600px" }}
          />
          <button id="new-task-submit" onClick={handleSubmit}>Update todo</button>
        </div>
     
    ) : (

      <div>
      <input
        id="new-task-input"
        type="text"
        value={input}
        ref={inputRef}
        name="text"
        className="todo-input"
        onChange={(e) => setInput(e.target.value)}
        placeholder="What do you have planned?"
        style={{ width: "600px" }}
      />
      <button id="new-task-submit" onClick={handleSubmit}>Add todo</button>
    </div>
    )
    </form>
  
  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      edit ? {editForm} : initialForm;
    </form>
  );
}
