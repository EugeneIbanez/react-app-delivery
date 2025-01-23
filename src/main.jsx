import { createRoot } from "react-dom/client";
import { App } from "./components/app/App";

// import { createElement } from "react";

const rootElement = document.getElementById("root");

const reactRoot = createRoot(rootElement);

// reactRoot.render(
//   createElement(
//     "div",
//     { style: { color: "red" }, className: "someClass" },
//     "hello world",
//     createElement("div", { style: { color: "green" } }, "inner div")
//   )
// );

// reactRoot.render(
//   createElement(
//     "ul",
//     { style: { color: "red" }, className: "someClass" },
//     [1, 2, 3, 4, 5].map((item) => createElement("li", {}, item))
//   )
// );

// jsx
// reactRoot.render(
//   <ul style={{ color: "red" }}>
//     <li>1</li>
//     <li>2</li>
//     <li>3</li>
//     <li>4</li>
//     <li>5</li>
//   </ul>
// );

// reactRoot.render(
//   <ul style={{ color: "red" }} className="someClass">
//     {[1, 2, 3, 4, 5].map((item) => (
//       <li key={item}>{item}</li>
//     ))}
//   </ul>
// );

reactRoot.render(<App />);
