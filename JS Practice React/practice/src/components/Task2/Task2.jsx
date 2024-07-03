import React, { useState } from "react";

function Task2({label}) {
  const cutText = label.substring( 0, label.indexOf('.') + 1)
  const [text, setText] = useState(cutText)
  const [isFull, setIsFull] = useState(false)

  function changeText(e) {
    if (!isFull) {
      setText(label)
    } else {
      setText(cutText)
    }
    setIsFull(!isFull)
  }
  return (
    <div>
      <h3>Task 2</h3>
      <p>{text}</p>
      <button onClick={changeText}>show more</button>
    </div>
  );
}

export default Task2;