import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

// React Element with JSX
const jsxheading = <h1>Namaste React using JSX</h1>;
console.log(jsxheading);

// Functional Component
const HeadingComponent = () => {
  return <h1> Namaste React Functional Component</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<HeadingComponent />);
