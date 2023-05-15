import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState("");
  const [timerRunning, setTimerRunning] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      if (timerRunning) {
        const currentTime = new Date().toLocaleTimeString();
        setTime(currentTime);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [timerRunning]);

  const [showTime, setShowTime] = useState(false);

  function updateTime() {
    setShowTime(!showTime);
  }

  function stopTimer() {
    setTimerRunning(false);
  }

  return (
    <div className="container">
      {showTime ? (
        <h1
          style={{ fontSize: "24px", marginBottom: "20px", cursor: "pointer" }}
          onClick={stopTimer}
        >
          {time}
        </h1>
      ) : (
        <h1
          style={{ fontSize: "24px", marginBottom: "20px", cursor: "pointer" }}
          onClick={stopTimer}
        >
          TIME
        </h1>
      )}
      <button
        style={{ padding: "10px 20px", fontSize: "18px" }}
        onClick={updateTime}
      >
        {showTime ? "Hide Time" : "Show Time"}
      </button>
    </div>
  );
}

export default App;
