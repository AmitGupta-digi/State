import React, { useState } from "react";
function FunState() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>Counts {count} </h2>
      <button onClick={() => setCount(count + 1)}> click to Increment</button>
      <button onClick={() => setCount(count - 1)}> click to Decrement </button>
    </>
  );
}
export default FunState;
