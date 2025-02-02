export const Review = ({ review }) => {
  const { user, text, rating } = review;

  return (
    <li>
      <p>{user}</p>
      <p>{text}</p>
      <p>Рейтинг: {rating}</p>
    </li>
  );
};
