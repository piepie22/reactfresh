import React, { useState, useEffect } from "react"; //useState and useEffect

const RunningExercise = () => {
  const [time, setTime] = useState(0); 
  const [isRunning, setIsRunning] = useState(false); 
  const [laps, setLaps] = useState([]);

// followed pattern from duration exercise
  const formatTime = (time) => {
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    const milliseconds = Math.floor((time % 1000) / 10); 
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${milliseconds.toString().padStart(2, "0")}`;};
  //start
  const startLap = () => {
    setIsRunning(true);};
  //stop
  const stopLap = () => {
    setIsRunning(false);
    setLaps([...laps, time]); };
  //reset
  const resetLap = () => {
    setIsRunning(false);
    setTime(0);};
   //utilizing week 6 powerpoint 
  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 10); 
      }, 10);
    } else {
      clearInterval(intervalId); 
    }
    return () => clearInterval(intervalId); 
  }, [isRunning]);

   //utilizing week 6 powerpoint 
  return ( 
    <div>
      <p>Timer: {formatTime(time)}</p>
      <button className="start-button" onClick={startLap} disabled={isRunning}>Start</button>
      <button className="stop-button" onClick={stopLap} disabled={!isRunning}>Stop</button>
      <button className="reset-button" onClick={resetLap}>Reset</button>
      <p>Laps:</p>
      <div>
        {laps.map((lap, index) => ( //map
          <div key={index}>Lap {index + 1}: {formatTime(lap)}</div>
        ))}
      </div>
    </div>);};

export default RunningExercise; 