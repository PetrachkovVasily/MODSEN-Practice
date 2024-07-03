import React, { createContext, useState } from "react";
import InputNumber from "./inputNumber/InputNumber";
import Message from "./Message/Message";

export const NumberContext = createContext()

export const moreThanZero = 'Число больше нуля'
export const lessThanZero = 'Число меньше нуля'
export const equal = ''
export const notANumber = 'input is not a number'

function Task3() {
  const [number, setNumber] = useState(0)
  const [inputValue, setInputValue] = useState('')

  function checkNumber(n) {
    if (n > 0) {
      setInputValue(moreThanZero)
    } else if (n < 0) {
      setInputValue(lessThanZero)
    } else {
      setInputValue(equal)
    }
  }

  return (
    <div>
      <h3>Task 3</h3>
      <NumberContext.Provider value={{number, setNumber, inputValue, setInputValue, checkNumber}}>
        <InputNumber/>
        <Message/>
      </NumberContext.Provider>
    </div>
  );
}

export default Task3;