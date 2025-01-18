import { createRoot } from "react-dom/client";
import { restaurants } from "../materials/mock";
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

reactRoot.render(
  <div>
    {restaurants.map((item) => (
      <div key={item}>
        <h2>{item.name}</h2>
        <h3>Меню</h3>
        <ul>
          {item.menu.map((dish) => (
            <li key={dish}>{dish.name}</li>
          ))}
        </ul>
        <h3>Отзывы</h3>
        <ul>
          {item.reviews.map((review) => (
            <li key={review}>
              <span>{review.user}: </span>
              <span>{review.text}</span>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);
