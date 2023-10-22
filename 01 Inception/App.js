/* 
Single Elements
<div id="root">
  <h1 style="color: red;">Hello World from ReactJs!</h1>
</div>; 
*/

// const heading = React.createElement(
//   "h1",
//   { style: { color: "red" } },
//   "Hello World from ReactJs!"
// );
// console.log(heading);
// // we render everything inside this root.
// const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(heading);
// console.log(root);

/* 
Now we create nested elements like this.
  <div id="parent">
    
    <div id="child">
        <h1>Helloooo from Nested H1</h1>
        <h2>Helloooo from Nested sibling H2</h2>
    </div>
    
    <div id="child2">
        <h1>Helloooo from Nested H1</h1>
        <h2>Helloooo from Nested sibling H2</h2>
    </div>
  </div> 
*/

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
