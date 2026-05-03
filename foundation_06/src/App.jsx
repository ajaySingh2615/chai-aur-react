import { useState } from "react";
import "./App.css";
import HookForm from "./HookForm";
import ManualForm from "./ManualForm";

function App() {
  const [tab, setTab] = useState("manual");

  return (
    <>
      <div>
        <div className="shell">
          <h1>Job Application</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            soluta?
          </p>
        </div>
        <div className="tab">
          <button onClick={() => setTab("manual")}>Controlled - Manual</button>
          <button onClick={() => setTab("rhf")}>React - Hook</button>
        </div>
        <h1>Getting started with react</h1>
        {tab === "manual" ? <ManualForm /> : <HookForm />}
      </div>
    </>
  );
}

export default App;
