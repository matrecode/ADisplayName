import React from "react";
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
  return (
    <>
      <h1>React Calculator</h1>
      <input type="text" name="text" />
      <div className={styles.btnContainer}>
        {buttonsArray.map((btn) => {
          return (
            <button type="button" className={styles.btns} key={btn}>
              {btn}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Calculator;
