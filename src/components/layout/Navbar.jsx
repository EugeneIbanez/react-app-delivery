export const Navbar = ({ restaurants, switchRestaurant }) => {
  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          <button
            className="btn"
            key={restaurant.id}
            onClick={() => switchRestaurant(restaurant)}
          >
            {restaurant.name}
          </button>
        </li>
      ))}
    </ul>
  );
};
