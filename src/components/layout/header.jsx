import { ToggleThemeButton } from "../toggle-theme-button/toggle-theme-button";
import { ToggleSignButton } from "../sign/sign-button";
import { AccountName } from "../sign/account-name";

export const Header = () => {
  return (
    <header>
      <ToggleThemeButton />
      <AccountName />
      <ToggleSignButton />
    </header>
  );
};
