import React from "https://esm.sh/react@19.0.0";
import ReactDOM from "https://esm.sh/react-dom@19.0.0/client";

const Chai = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name || "Guest"),
    React.createElement("p", {}, props.description || "No description"),
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    {
      className: "container",
    },
    React.createElement("h1", null, "Hello from React"),
    React.createElement(Chai, {
      name: "Chai",
      description: "Chai is ready to drink",
    }),
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
