import { DishCounter } from "../counter/DishCounter";

export const Dish = ({ dish }) => {
  const { imgs, name, ingredients, price } = dish;

  return (
    <li>
      <article className="dish" itemScope itemType="https://schema.org/Product">
        <div className="desc">
          <picture className="image">
            <source
              type="image/avif"
              srcSet={`${imgs.avif1} 1x, ${imgs.avif2} 2x`}
            />
            <source
              type="image/webp"
              srcSet={`${imgs.webp1} 1x, ${imgs.webp2} 2x`}
            />
            <img
              src={imgs.jpg1}
              srcSet={`${imgs.jpg2} 2x`}
              alt={name}
              loading="lazy"
              itemProp="image"
            />
          </picture>
          <div>
            <h4>{name}</h4>
            <ul className="ingredients">
              {ingredients.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="ecom">
          <p className="price">
            {price} <span>&#8381;</span>
          </p>
          <DishCounter />
        </div>
      </article>
    </li>
  );
};
