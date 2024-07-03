import React from "react";
import { useContext } from "react";
import { NumberContext } from "../Task3";

function Message() {
  const {inputValue} = useContext({...NumberContext})

  return (
    <div>
      <p>{inputValue}</p>
    </div>
  );
}

export default Message;