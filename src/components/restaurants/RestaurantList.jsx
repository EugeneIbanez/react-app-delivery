import { useState, use } from "react";
import { Navbar } from "../layout/TabBtns";
import { ShownRestaurant } from "./ShownRestaurant";
import { restaurants } from "../../data/mock";
import { ThemeContext } from "../app/App";

export const RestaurantList = () => {
  const [shownRestaurant, setShownRestaurant] = useState(restaurants[0]);

  const switchRestaurant = (selected) => {
    setShownRestaurant(selected);
  };

  const theme = use(ThemeContext);
  console.log(theme);

  return (
    <main className="container">
      <Navbar restaurants={restaurants} switchRestaurant={switchRestaurant} />
      <ShownRestaurant shownRestaurant={shownRestaurant} />
      <ShownRestaurant shownRestaurant={shownRestaurant} />
      <ShownRestaurant shownRestaurant={shownRestaurant} />
    </main>
  );
};
