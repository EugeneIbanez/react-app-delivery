import { useState } from "react";
import { SignContext } from "./index";

export const SignContextProvider = ({ children }) => {
  const [sign, setSign] = useState({ isSigned: false });

  const toggleSign = () => {
    setSign((prev) =>
      prev.isSigned ? { isSigned: false } : { isSigned: true, name: "Account" }
    );
  };

  return (
    <SignContext.Provider value={{ sign, toggleSign }}>
      {children}
    </SignContext.Provider>
  );
};
