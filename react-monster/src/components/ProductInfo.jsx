import React from 'react'

const products = {
    name : "Laptop",
    price : "1200",
    availabality : "available in stock"
};
const ProductInfo = () => {
  return (
    <div>
      <p>My product is {products.name}</p>
      <p>The product price is ${products.price}</p>
      <p>This product is {products.availabality}</p>
    </div>
  )
}

export default ProductInfo
