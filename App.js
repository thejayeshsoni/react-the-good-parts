const heading = React.createElement("div", { id: "heading" }, [
  React.createElement("h1", {}, "Hello from REACT"),
  React.createElement("h2", {}, "Changes made by Jayesh Soni"),
]); // core react thing

const root = ReactDOM.createRoot(document.getElementById("parent"));

root.render(heading);