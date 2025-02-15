import { Counter } from "../counter/Counter";
import { useReviewForm } from "./use-review-form";

export const ReviewForm = () => {
  const { form, setUser, setText, onIncrement, onDecrement, resetForm } =
    useReviewForm();
  const { user, text, count } = form;
  return (
    <div className="review-form">
      <h4>Оставить отзыв</h4>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <div>
          <span>User</span>
          <input
            type="text"
            name="user"
            value={user}
            placeholder="Enter name"
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <div>
          <span>Text</span>
          <textarea
            name={text}
            value={text}
            placeholder="Enter review"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          <span>Rating</span>
          <Counter
            count={count}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        </div>
        <button className="clear-form" onClick={resetForm}>
          Clear
        </button>
      </form>
    </div>
  );
};
