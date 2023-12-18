import { FC, ReactElement } from "react";

import { ROUTER } from "../../../App";
import { LogoLink } from "./index";

const Logo: FC = (): ReactElement => {
  return (
    <LogoLink to={ROUTER.MAIN}>
      <img src="/logo.svg" alt="Logo" />
      LearnLingo
    </LogoLink>
  );
};

export default Logo;
