import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = e =>{
    e.preventDefault()

    if(inputValue.trim()) {
      setTodo([...todo , inputValue]);
      setInputValue("")
    }
  }

  const handleChange = e =>{
    setInputValue(e.target.value)
  }
  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} placeholder="Add new Todo" />
        <button type="submit">Add todo list</button>
      </form>

      <ul>
        {todo.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
