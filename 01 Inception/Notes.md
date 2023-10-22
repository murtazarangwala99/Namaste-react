## Writing Hello World using JavaScript :

div.main

const headingJs = document.createElement("h1");
headingJs.innerHTML = "Hello World from JavaScript!";
const main = document.querySelector(".main");
main.append(headingJs);

## Writing Hello World using ReactJs :

div#root

const heading = React.createElement("h1", {}, "Hello World from ReactJs!");

<!-- Empty object is useful for craeting Attributes of element ex: { id: "heading"}
or style: { color: "red" }
-->

<!-- Here heading is Object(React Element) -->

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(heading);
