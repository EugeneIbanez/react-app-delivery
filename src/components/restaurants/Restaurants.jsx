import { restaurants } from "../../constants/mock";

export const Restaurants = () => {
  return (
    <>
      <h1>Restaurants</h1>
      {restaurants.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <h3>Меню</h3>
          <ul>
            {item.menu.map((dish) => (
              <li key={dish.id}>{dish.name}</li>
            ))}
          </ul>
          <h3>Отзывы</h3>
          <ul>
            {item.reviews.map((review) => (
              <li key={review.id}>
                <span>{review.user}: </span>
                <span>{review.text}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};
