import { restaurants } from "../../data/mock";

export const Navbar = () => {
  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          <button>{restaurant.name}</button>
        </li>
      ))}
    </ul>
  );
};
