import { Dish } from "./Dish";

export const Dishes = ({ dishes }) => {
  if (!dishes || !dishes?.length) {
    return null;
  }

  return (
    <>
      <h3>Меню</h3>
      <ul className="dishes">
        {dishes.map((dish) => (
          <Dish key={dish.id} dish={dish} />
        ))}
      </ul>
    </>
  );
};
