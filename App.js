import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement() => Object => HTMLElement (render)
const heading = React.createElement("h1", { id: "heading" }, "Hello from React..!");
console.log(heading)

const jsxHeading = <h1 id="heading">Hello from JSX</h1>;
console.log(jsxHeading)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);