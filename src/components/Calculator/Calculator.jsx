import React, { useState } from "react";
import styles from "./Calculator.module.css";

const Calculator = () => {
  const buttonsArray = [
    "7",
    "8",
    "9",
    "+",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "*",
    "C",
    "0",
    "=",
    "/",
  ];

  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(input));
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else {
      setInput(input + value);
    }
  };

  return (
    <>
      <h1>React Calculator</h1>
      <input type="text" value={input} name="text" readOnly />
      <p>{result}</p>
      <div className={styles.btnContainer}>
        {buttonsArray.map((btn) => {
          return (
            <button
              type="button"
              onClick={() => handleClick(btn)}
              className={styles.btns}
              key={btn}
            >
              {btn}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Calculator;
