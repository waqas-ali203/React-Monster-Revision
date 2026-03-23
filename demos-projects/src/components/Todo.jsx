import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    setTodos((todos) => {
      return todos.concat({
        text: inputValue,
        id: Date.now() + Math.random(),
      });
    });
    setInputValue("");
  };

  const removeTodo = (id) =>
    setTodos((todos) => todos.filter((t) => t.id !== id));
  return (
    <div>
      <input
        type="text"
        placeholder="Enter some text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button onClick={handleSubmit}>Add Todo</button>
      <ul>
  {todos.map((todo) => (
    <li key={todo.id}>
      <span>{todo.text}</span>
      <button onClick={() => removeTodo(todo.id)}>Remove</button>
    </li>
  ))}
</ul>
    </div>
  );
};

export default Todo;
