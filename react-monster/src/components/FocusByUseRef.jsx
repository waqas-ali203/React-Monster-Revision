import React, { useRef } from 'react'

const FocusByUseRef = () => {
    const inputRef = useRef(null);

    const FocusInput = () =>{
        if(inputRef.current){
            inputRef.current.focus()
        }
    }
  return (
    <div>
      <input type="text" ref={inputRef}  placeholder='Click button for focus'/>
      <button onClick={FocusInput}>Click Me</button>
    </div>
  )
}

export default FocusByUseRef
