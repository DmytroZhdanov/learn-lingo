import { FC, ReactElement, useEffect, useState } from "react";

import AuthBar from "../AuthBar";
import Icon from "../Icon";
import Logo from "../Logo";
import NavBar from "../NavBar";
import { HeaderStyled, MenuButton } from "./index";

const Header: FC = (): ReactElement => {
  const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth >= 1120);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 1120);
  };

  return (
    <HeaderStyled>
      <Logo />

      {isDesktop ? (
        <>
          <NavBar />
          <AuthBar />
        </>
      ) : (
        <MenuButton type="button">
          <Icon iconId="burger" />
        </MenuButton>
      )}
    </HeaderStyled>
  );
};

export default Header;
