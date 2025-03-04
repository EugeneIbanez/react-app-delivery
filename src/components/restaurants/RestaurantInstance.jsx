import { use } from "react";
import { ThemeContext } from "../theme-context";

export const RestaurantInstance = ({ shownRestaurant, children }) => {
  const { theme } = use(ThemeContext);
  return (
    <article>
      <h2 style={{ color: theme === "dark" ? "orange" : "blue" }}>
        {shownRestaurant.name}
      </h2>
      {children}
    </article>
  );
};
