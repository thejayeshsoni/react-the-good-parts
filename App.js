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
  return (
    <div>
      {HeadingComponent2()}
      <HeadingComponent2 />
      <h1>Heading Functional Component 1</h1>
    </div>
  );
};
const HeadingComponent2 = () => <h1>Heading Functional Component 2</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent1 />);
