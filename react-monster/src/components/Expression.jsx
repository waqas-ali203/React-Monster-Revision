import React from 'react'

var myName = "Waqas Ali";
const multiply= (a,b) => a*b;
const myCast = "Special class";
const Expression = () => {
  return (
    <div>
      <h1>2+2 = {2+2}</h1>
      <p>My name is {myName}</p>
      <p>2*5 = {multiply(2 , 5)}</p>

      <p className={myCast}>This is for special className</p>
    </div>
  )
}

export default Expression
