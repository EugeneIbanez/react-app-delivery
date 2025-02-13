import styles from "./review.module.css";

export const Review = ({ review }) => {
  const { user, text, rating } = review;

  return (
    <li>
      <p className={styles.name}>{user}</p>
      <p className={styles.text}>{text}</p>
      <p>
        Рейтинг: <span className={styles.rating}>{rating}</span>
      </p>
    </li>
  );
};
