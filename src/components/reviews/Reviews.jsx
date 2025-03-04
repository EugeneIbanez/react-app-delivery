import { Review } from "./Review";
import { ThemeContext } from "../theme-context";
import { use } from "react";

export const Reviews = ({ reviews }) => {
  if (!reviews || !reviews?.length) {
    return null;
  }
  const { theme } = use(ThemeContext);

  return (
    <>
      <h3 style={{ color: theme === "dark" ? "orange" : "blue" }}>Отзывы</h3>
      <ul>
        {reviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </ul>
    </>
  );
};
