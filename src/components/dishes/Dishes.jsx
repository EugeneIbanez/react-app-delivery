import { Counter } from "../counter/Counter";

export const Dishes = ({ dishes }) => {
  if (!dishes || !dishes?.length) {
    return null;
  }

  return (
    <>
      <h3>Меню</h3>
      <ul className="dishes">
        {dishes.map((dish) => (
          <li key={dish.id}>
            <article className="dish">
              <h4>{dish.name}</h4>
              <ul>
                {dish.ingredients.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ul>
              <p className="price">{dish.price}</p>
              <Counter />
            </article>
          </li>
        ))}
      </ul>
    </>
  );
};
