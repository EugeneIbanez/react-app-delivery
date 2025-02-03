import { Dishes } from "../dishes/Dishes";
import { Reviews } from "../reviews/Reviews";
import { RestaurantInstance } from "./RestaurantInstance";

export const ShownRestaurant = ({ shownRestaurant }) => {
  return (
    <div>
      <RestaurantInstance shownRestaurant={shownRestaurant}>
        <Dishes dishes={shownRestaurant.menu} />
        <Reviews reviews={shownRestaurant.reviews} />
      </RestaurantInstance>
    </div>
  );
};
