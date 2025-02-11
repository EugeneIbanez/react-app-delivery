import { Counter } from "./Counter";
import { useCount } from "./use-count";

export const DishCounter = () => {
  const { count, onDecrement, onIncrement } = useCount();

  return (
    <Counter
      count={count}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
    />
  );
};
