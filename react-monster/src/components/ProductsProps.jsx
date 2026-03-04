import React from 'react'

const ProductsProps = ({name , age , mobile}) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
      <p>{mobile}</p>
    </div>
  )
}

export default ProductsProps
