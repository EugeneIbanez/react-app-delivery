import { Review } from "./Review";

export const Reviews = ({ reviews }) => {
  if (!reviews || !reviews?.length) {
    return null;
  }

  return (
    <>
      <h3>Отзывы</h3>
      <ul>
        {reviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </ul>
    </>
  );
};
