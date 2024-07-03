import React from "react";
import { useContext } from "react";
import { NumberContext } from "../Task3";

function InputNumber() {
  const {number, setNumber, checkNumber} = useContext({...NumberContext})

  function changeNumber(e) {
    setNumber(e.target.value)
    checkNumber(e.target.value)
  }
  return (
    <input type="number" value={number} onChange={changeNumber}/>
  );
}

export default InputNumber;