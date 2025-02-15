import styles from "./review.module.css";

export const Review = ({ review }) => {
  const { user, text, rating } = review;

  return (
    <li className={styles.item}>
      <p className={styles.name}>{user}</p>
      <p className={styles.text}>{text}</p>
      <p className={styles.rating}>
        <span>{rating}</span>
      </p>
    </li>
  );
};
