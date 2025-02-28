import React, { useState } from "react"; //usestate
import "./design.css"; //importing my css
import RepetitionExercise from "./components/RepetitionExercise"; //file paths
import DurationExercise from "./components/DurationExercise"; //file paths
import RunningExercise from "./components/RunningExercise";

//exercises
const exercises = [
  { name: "Push-Ups", type: "repetition" },
  { name: "Planks", type: "duration" },
  { name: "Running", type: "running" },
  { name: "Sit-Ups", type: "repetition" },
  { name: "Squats", type: "repetition" },
];
function App() {
  const [exercise, setExercise] = useState(null);
  const exerciseComps = {
    repetition: RepetitionExercise,
    duration: DurationExercise,
    running: RunningExercise,
  };

  const onReturn = () => setExercise(null);
  if (exercise) {
    const ExerciseComp = exerciseComps[exercise.type];
    return (
      <div>
        <h2>{exercise.name}</h2>
        <ExerciseComp name={exercise.name} />
        <button onClick={onReturn}>Return</button>
      </div>
    );
  }
  return (
    <div>
      <h1>Choose an Exercise:</h1>
      {exercises.map((exercise) => (
        <button className="appjs-button" key={exercise.name}onClick={() => setExercise(exercise)}>{exercise.name}</button>
      ))}
    </div> );
}
export default App;
