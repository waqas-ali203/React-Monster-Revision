import React from 'react'
const message = "Hello";
const date = new Date();
const Greet = () => {
  return (
    <div>
      <h1>{message}</h1>
      <p>Date : {date.getDate()}</p>
    </div>
  )
}

export default Greet
