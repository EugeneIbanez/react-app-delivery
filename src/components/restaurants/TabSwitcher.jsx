export const TabSwitcher = ({ restaurants, switchRestaurant }) => {
  return (
    <div className="tab-switcher">
      {restaurants.map((restaurant) => (
        <button
          className="btn"
          key={restaurant.id}
          onClick={() => switchRestaurant(restaurant)}
        >
          {restaurant.name}
        </button>
      ))}
    </div>
  );
};
