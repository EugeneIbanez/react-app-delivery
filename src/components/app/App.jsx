import { createContext, useState } from "react";
import { Layout } from "../layout/Layout";
import { RestaurantList } from "../restaurants/RestaurantList";

export const ThemeContext = createContext("light");

export const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      if (currentTheme === "dark") {
        return "light";
      } else {
        return "dark";
      }
    });
  };

  return (
    <ThemeContext value={theme}>
      <button
        style={{ color: theme === "dark" ? "orange" : "blue" }}
        onClick={toggleTheme}
      >
        Theme
      </button>
      <Layout>
        <RestaurantList />
      </Layout>
    </ThemeContext>
  );
};
