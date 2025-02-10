import { Counter } from "../counter/Counter";
import { useReviewForm } from "./use-review-form";

export const ReviewForm = () => {
  const { form, setUser, setText, onIncrement, onDecrement, resetForm } =
    useReviewForm();
  const { user, text, count } = form;
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <span>User</span>
          <input
            type="text"
            name="user"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <div>
          <span>Text</span>
          <textarea
            name={text}
            value={text}
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
        <button onClick={resetForm}>Clear</button>
      </form>
    </>
  );
};
