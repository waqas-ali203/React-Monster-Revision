import React from 'react'
import Nav from './Navigation/Nav'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended'
import Sidebar from './Sidebar/Sidebar'

const App = () => {
  return (
    <div>
      {/* <Sidebar /> */}
      <Nav />
      {/* <Products /> */}
      <Recommended />
    </div>
  )
}

export default App
