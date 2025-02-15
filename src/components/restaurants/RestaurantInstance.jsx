export const RestaurantInstance = ({ shownRestaurant, children }) => {
  return (
    <article>
      <h2>{shownRestaurant.name}</h2>
      {children}
    </article>
  );
};
