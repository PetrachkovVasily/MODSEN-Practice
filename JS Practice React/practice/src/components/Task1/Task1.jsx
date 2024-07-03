import React, { useRef } from "react";

function Task1() {
  const ref = useRef('')

  function logText(e) {
    console.log(ref.current)
  }

  function changeRef(e) {
    ref.current = e.target.value;
  }
  return (
    <div>
      <h3>Task 1</h3>
      <input type="text" onChange={changeRef}/>
      <button onClick={logText}>log text</button>
    </div>
  );
}

export default Task1;