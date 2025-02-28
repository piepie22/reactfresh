import React, { useState, useEffect } from "react"; //usestate and useeeffect
function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false); 

  // utilizing powerpoint Week 6 
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
  //researched different techniques to build timer utilized kwebby and medium to craft a timer
  //https://medium.com/@harshitgambhir88/how-to-create-a-stopwatch-in-under-50-lines-of-javascript-code-963e42f9276f
  //https://kwebby.com/blog/stopwatch-using-javascript/
  const formatTime = (time) => {  
    const minutes = Math.floor((time / 1000 / 60) % 60); //using math.floor to calculate into minutes 
    const seconds = Math.floor((time / 1000) % 60);  //converting into seconds
    const milliseconds = Math.floor((time % 1000) / 10); // converting into 10ths of a second
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${milliseconds.toString().padStart(2, "0")}`;
  }; //padstart added so it will display as 2 numbers 

  //utilizing week 6 powerpoint 
  return (
    <div>
      <p>Timer: {formatTime(time)}</p>
      <button className="start-button" onClick={() => setIsRunning(true)}>Start</button>
      <button className="stop-button" onClick={() => setIsRunning(false)}>Stop</button> 
      <button className="reset-button" onClick={() => {setIsRunning(false); setTime(0); }}>Reset</button>
    </div> 
  );
}

export default Timer;
