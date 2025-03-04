import { use } from "react";

import { SignContext } from ".";

export const AccountName = () => {
  const { sign } = use(SignContext);

  return sign.isSigned ? <div>{sign.name}</div> : null;
};
