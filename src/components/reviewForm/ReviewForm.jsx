import { Counter } from "../counter/Counter";
// import { useReviewFrom } from "./use-review-form";

export const ReviewForm = (
  onIncrement,
  onDecrement,
  rating,
  setUser,
  setText
) => {
  return (
    <form>
      <div>
        <span>User</span>
        <input
          type="text"
          value={setUser}
          onChange={(event) => setUser(event.target.value)}
        />
      </div>
      <div>
        <span>Text</span>
        <input
          type="textarea"
          value={setText}
          onChange={(event) => setText(event.target.value)}
        />
      </div>
      <div>
        <span>Rating</span>
        <Counter
          value={rating}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      </div>
      {/* <button onClick={(event) => formReset()}></button> */}
    </form>
  );
};
