import { useReducer } from "react";

const INITIAL_VALUE = {
  user: "",
  text: "",
  count: 0,
};

const SET_USER_ACTION = "SET_USER";
const SET_TEXT_ACTION = "SET_TEXT";
const ON_INCREMENT_ACTION = "SET_INCREMENT";
const ON_DECREMENT_ACTION = "SET_DECREMENT";
const RESET_ACTION = "RESET";

const reducer = (form, { type, payload }) => {
  switch (type) {
    case SET_USER_ACTION:
      return { ...form, user: payload };
    case SET_TEXT_ACTION:
      return { ...form, text: payload };
    case ON_INCREMENT_ACTION:
      return { ...form, count: Math.min(form.count + 1, 5) };
    case ON_DECREMENT_ACTION:
      return { ...form, count: Math.max(form.count - 1, 0) };
    case RESET_ACTION:
      return INITIAL_VALUE;
    default:
      return form;
  }
};

export const useReviewForm = () => {
  const [form, dispatch] = useReducer(reducer, INITIAL_VALUE);

  const setUser = (value) =>
    dispatch({ type: SET_USER_ACTION, payload: value });
  const setText = (value) =>
    dispatch({ type: SET_TEXT_ACTION, payload: value });
  const onIncrement = () => dispatch({ type: ON_INCREMENT_ACTION });
  const onDecrement = () => dispatch({ type: ON_DECREMENT_ACTION });
  const resetForm = () => dispatch({ type: RESET_ACTION });

  return {
    form,
    setUser,
    setText,
    onIncrement,
    onDecrement,
    resetForm,
  };
};
