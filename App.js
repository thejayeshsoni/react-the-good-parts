import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement() => Object => HTMLElement (render)
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello from React..!"
);
console.log(heading);

//JSX => Babel transpiles it to React.createElement() => JS Object => HTMLElement (render)
const jsxHeading = <h1 id="heading">Hello from JSX</h1>;
console.log(jsxHeading);

/**
 * React components
 *  - Class based components
 *  - Functional components
 */
const HeadingComponent1 = () => {
  return <h1>Heading Functional Component</h1>;
};
const HeadingComponent2 = () => <h1>Heading Functional Component</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

// to render a component don't use => root.render(HeadingComponent1); instead use --:
root.render(<HeadingComponent1 />);
