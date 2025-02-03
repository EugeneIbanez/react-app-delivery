import { useReducer } from "react";

const INITIAL_VALUE = {
  user: "",
  text: "",
  rating: 0,
};

const SET_USER_ACTION = "SET_USER";
const SET_TEXT_ACTION = "SET_TEXT";
const SET_RATING_ACTION = "SET_RATING";
const RESET_ACTION = "RESET";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_USER_ACTION:
      return { ...state, user: payload };
    case SET_TEXT_ACTION:
      return { ...state, text: payload };
    case SET_RATING_ACTION:
      return { ...state, rating: payload };
    case RESET_ACTION:
      return INITIAL_VALUE;
    default:
      return state;
  }
};

export const useReviewForm = () => {
  const [user, text, rating] = form;
  const [form, dispatch] = useReducer(reducer, INITIAL_VALUE);

  const setUser = (value) =>
    dispatch({ type: SET_USER_ACTION, payload: value });
  const setText = (value) =>
    dispatch({ type: SET_TEXT_ACTION, payload: value });
  const setRating = (value) =>
    dispatch({ type: SET_RATING_ACTION, payload: value });
  // const resetForm = () => dispatch({})

  return {
    user,
    text,
    rating,
    // onIncrement,
    // onDecrement,
    setUser: setUser(),
    setText: setText(),
    setRating: setRating(),
  };
};
