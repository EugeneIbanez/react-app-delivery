export const RestaurantInstance = ({ shownRestaurant, children }) => {
  return (
    <article>
      <div>{shownRestaurant.name}</div>
      {children}
    </article>
  );
};
