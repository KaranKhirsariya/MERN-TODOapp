import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
        title: input,
        description: null,
        createdDate: new Date(),
        completedDate: null,
        dueDate: null,
        done: false
      });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="todo..."
        value={input}
        onChange={handleChange}
        name="text"
      />
      <button onClick={handleSubmit}>add todo</button>
    </form>
  );
}

export default TodoForm;
