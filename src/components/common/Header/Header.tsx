import { FC, ReactElement } from "react";

import AuthBar from "../AuthBar";
import Logo from "../Logo";
import NavBar from "../NavBar";
import { HeaderStyled } from "./index";

const Header: FC = (): ReactElement => {
  return (
    <HeaderStyled>
      <Logo />
      <NavBar />
      <AuthBar />
    </HeaderStyled>
  );
};

export default Header;
