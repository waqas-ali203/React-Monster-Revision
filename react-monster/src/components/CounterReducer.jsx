import React, { useReducer, useState } from "react";
import { counterReducer, initialState } from "./counterReduce";
const CounterReducer = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const [inputValue, setInputValue] = useState(0);

  const handleIncrement = () => dispatch({ type: "increment" });
  const handleDecrement = () => dispatch({ type: "decremnent" });
  const handleIncrementByAmount = () =>{
    dispatch({ type: "incrementByAmout", payload: +inputValue });
    setInputValue(0);
  }
  const handleDecrementByAmount = () =>{
    dispatch({ type: "decrementByAmout", payload: +inputValue });
    setInputValue(0);
  }
  return (
    <div>
      <h2>Counter : {state.count}</h2>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>

      <div>
        <input
          type="number"
          placeholder="Enter a Number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleIncrementByAmount}>Add</button>
        <button onClick={handleDecrementByAmount}>Subtract</button>
      </div>
    </div>
  );
};

export default CounterReducer;
