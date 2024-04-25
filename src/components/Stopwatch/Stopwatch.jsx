import React, { useEffect, useState } from "react";

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [timer, setTimer] = useState(0);

  function formatTime(sec) {
    let minutes = Math.floor(sec / 60);
    let remainingSec = sec % 60;

    return `${minutes}:${remainingSec < 10 ? "0" : ""}${remainingSec}`;
  }

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleStartAndStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setTimer(0);
    setIsRunning(false);
  };

  return (
    <>
      <h1>Stopwatch</h1>
      <p>Time: {formatTime(timer)}</p>
      <button onClick={handleStartAndStop}>
        {isRunning ? "Stop" : "Start"}
      </button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default Stopwatch;
