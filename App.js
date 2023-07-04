const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from REACT"
); // core react thing

const root = ReactDOM.createRoot(document.getElementById("parent"));

root.render(heading);
