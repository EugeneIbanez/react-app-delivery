import { useState } from "react";
import { TabSwitcher } from "./TabSwitcher";
import { ShownRestaurant } from "./ShownRestaurant";
import { restaurants } from "../../data/mock";

export const RestaurantList = () => {
  const [shownRestaurant, showRestaurantItem] = useState(restaurants[0]);

  const switchRestaurant = (selected) => {
    showRestaurantItem(selected);
  };

  return (
    <>
      <TabSwitcher
        restaurants={restaurants}
        switchRestaurant={switchRestaurant}
      />
      <ShownRestaurant shownRestaurant={shownRestaurant} />
    </>
  );
};
