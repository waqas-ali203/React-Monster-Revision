import React from 'react'

// const Validpassword = () => {
//   return <h1>Valid Password</h1>  
// }
// const Invalidpassword = () => {
//   return <h1>Invalid Password</h1>  
// }

// const CheckPassword = ({ isValid }) => {  // PascalCase + destructuring
//   return isValid ? <Validpassword /> : <Invalidpassword />
// }
const items = ["apple" , "banana" , "orange"]
const RenderDynamically = () => {
  return (
    <div>
      {/* <CheckPassword isValid={true} /> */}
      <h1>Products of Fruits</h1>
      {items.length > 0 && <h2>You have {items.length} in you cart</h2>}

      {items.map((fruits)=>(
         <li key={Math.random()}>{fruits}</li>
      ))}
    </div>
  )
}

export default RenderDynamically
