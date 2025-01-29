export const Reviews = ({ reviews }) => {
  if (!reviews || !reviews?.length) {
    return null;
  }

  return (
    <>
      <h3>Отзывы</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>{review.user}</p>
            <p>{review.text}</p>
            <p>Рейтинг: {review.rating}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
