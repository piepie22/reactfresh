import React, { useState, useEffect } from "react"; //use state and effect

// utilizing week 6 powerpoint, understand setCount will add incremenets and reduce 
function Counter() {
  const [count, setCount] = useState(0);
   useEffect(() => {
    console.log("Repetition Exercise complete");
   });

  return (
    <div> 
      <p>Reps: {count}</p> 
      <button className="start-button" onClick={() => setCount(count + 1)}>+ 1 Rep</button>
      <button className="stop-button"onClick={() => setCount(count - 1)}>- 1 Rep</button>
      <button className="reset-button"onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
export default Counter;