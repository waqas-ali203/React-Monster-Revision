import React, { useEffect } from 'react'

const BasicuseEffetc = () => {

    useEffect(() =>{
        console.log("Data is effect by simple use effect")
    },[]);

  return (
    <div>
      <h1>Basic UseEffect hit done successfully</h1>
    </div>
  )
}

export default BasicuseEffetc
