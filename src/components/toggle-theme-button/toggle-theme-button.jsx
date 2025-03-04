import { use } from "react";
import { ThemeContext } from "../theme-context";

export const ToggleThemeButton = () => {
  const { theme, toggleTheme } = use(ThemeContext);
  return (
    <button onClick={toggleTheme}>
      {theme === "dark" ? "Switch to light" : "Switch to dark"}
    </button>
  );
};
