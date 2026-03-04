import React from "react";

const moveHandler = () =>{
    console.log("Move move fired")
}
const Button = () => {
  return (
    <div>
      <p onMouseMove={moveHandler}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat culpa
        molestias nobis laboriosam corrupti tempora asperiores, ad hic
        cupiditate beatae? Officia ad illo officiis corporis magnam fuga,
        reprehenderit repudiandae porro.
      </p>
    </div>
  );
};

export default Button;
