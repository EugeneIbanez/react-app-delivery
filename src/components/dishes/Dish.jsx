import { Counter } from "../counter/Counter";

export const Dish = ({ dish }) => {
  const { name, ingredients, price } = dish;

  return (
    <li>
      <article className="dish">
        <h4>{name}</h4>
        <ul>
          {ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
        <p className="price">{price}</p>
        <Counter />
      </article>
    </li>
  );
};
