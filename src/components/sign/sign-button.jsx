import { use } from "react";
import { SignContext } from ".";

export const ToggleSignButton = () => {
  const { sign, toggleSign } = use(SignContext);
  return (
    <button onClick={toggleSign}>{sign.isSigned ? "Вход" : "Выход"}</button>
  );
};
