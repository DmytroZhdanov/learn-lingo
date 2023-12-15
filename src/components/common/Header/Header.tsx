import { FC, ReactElement } from "react";
import AuthBar from "../AuthBar";
import Logo from "../Logo";
import NavBar from "../NavBar";

const Header: FC = (): ReactElement => {
  return (
    <div>
      Header component
      <Logo />
      <NavBar />
      <AuthBar />
    </div>
  );
};

export default Header;
