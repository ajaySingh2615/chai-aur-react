import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  function addValue() {
    setCounter(counter + 1);
  }

  function removeValue() {
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Hello</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
