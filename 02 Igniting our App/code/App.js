import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Helloooo from Nested H1"),
    React.createElement("h2", {}, "Helloooo from Nested sibling H2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Helloooo from Nested H1"),
    React.createElement("h2", {}, "Helloooo from Nested sibling H2"),
  ]),
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(parent);
