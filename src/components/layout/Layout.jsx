import { ProgressBar } from "../progress-bar/progress-bar";

export const Layout = ({ children }) => {
  return (
    <>
      <ProgressBar />
      <header>header</header>
      {children}
      <footer>footer</footer>
    </>
  );
};
