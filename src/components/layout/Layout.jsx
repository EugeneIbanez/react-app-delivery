import { ProgressBar } from "../progress-bar/progress-bar";
import { Header } from "./header";

export const Layout = ({ children }) => {
  return (
    <>
      <ProgressBar />
      <Header></Header>
      {children}
      <footer>footer</footer>
    </>
  );
};
