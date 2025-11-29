import React from "react";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Card username="mike" btnTxt="click me" />
      <Card username="eleven" btnTxt="Learn more about stranger things" />
      <Card />
    </>
  );
}

export default App;
