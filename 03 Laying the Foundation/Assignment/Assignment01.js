/* 
Question 01: Create a `Nested header Element` using `React.createElement`(h1,h2,h3 inside a div with class "title")
- Create the `same element using JSX`
- Create a `functional component of the same with JSX`
- `Pass attribute` into the tag in `JSX`
- `Composition of Component` (Add a component inside another)
- `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX.
*/

import React from "react";
import ReactDOM from "react-dom/client";

// ********** Task 01 : React.createElement(h1,h2,h3 inside a div with class "title") **********
/* 
const heading = React.createElement("div", { className: "title" }, [
  React.createElement("h1", {}, "Hello from H1"),
  React.createElement("h2", {}, "Hello from H2"),
  React.createElement("h3", {}, "Hello from H3"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); 
*/

// *************** Task 02: Create Same using JSX ***************

/* 
const headingJSX = (
  <div className="title">
    <h1>Hello from H1</h1>
    <h2>Hello from H2</h2>
    <h3>Hello from H3</h3>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(headingJSX); */

// *************** Task 03: functional component of the same with JSX ***************
// *************** Task 04: Pass attribute into the tag in `JSX` ***************
// const HeadingfnComponent = () => {
//   return (
//     <div className="title">
//       {/* Task 4 is here adding Color attribute */}
//       <h1 style={{ color: "red" }}>Hello from H1</h1>
//       <h2 style={{ color: "blue" }}>Hello from H2</h2>
//       <h3 style={{ color: "yellow" }}>Hello from H3</h3>
//       <AnotherComponent />
//     </div>
//   );
// };
// ********** Task 05: Composition of Component (Add a component inside another) **********

/* const AnotherComponent = () => {
  return <h2 style={{ color: "orange" }}>Another Component</h2>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingfnComponent />);
 */
// *** Task 06 : `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX. ***

/* 
const element = <h1 style={{ color: "orange" }}>TitleComponentElement</h1>;

const TitleComponent = () => {
  return <h1 style={{ color: "blue" }}>TitleComponents</h1>;
};

const Header = () => {
  return (
    <>
      {element}
      <TitleComponent />
      <TitleComponent></TitleComponent>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
*/
