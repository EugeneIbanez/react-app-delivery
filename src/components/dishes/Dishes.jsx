import { DishCounter } from "../counter/DishCounter";

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
            <article
              className="dish"
              itemScope
              itemType="https://schema.org/Product"
            >
              <div className="image">
                <img src="#" alt={dish.name} itemProp="image" />
              </div>
              <div className="wrap">
                <div className="desc">
                  <h4 itemProp="name">{dish.name}</h4>
                  <ul className="ingredients">
                    {dish.ingredients.map((ingredient) => (
                      <li key={ingredient}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
                <p
                  className="price"
                  itemProp="offers"
                  itemScope
                  itemType="https://schema.org/Offers"
                >
                  <span itemProp="price">{dish.price}</span>
                  <span itemProp="priceCurrency" content="RUB">
                    руб
                  </span>
                </p>
              </div>
              <div className="dishCounter">
                <DishCounter />
              </div>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
};
