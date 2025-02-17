export const Counter = ({ count = 0, onIncrement, onDecrement }) => {
  return (
    <div className="counter">
      <button className="counterBtn" onClick={onDecrement}>
        -
      </button>
      <span>{count}</span>
      <button className="counterBtn" onClick={onIncrement}>
        +
      </button>
    </div>
  );
};
