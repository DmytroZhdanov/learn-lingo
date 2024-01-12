import { FC, ReactElement, useEffect, useState } from "react";

import AuthBar from "../AuthBar";
import Icon from "../Icon";
import Logo from "../Logo";
import MobileMenu from "../MobileMenu";
import NavBar from "../NavBar";
import { HeaderStyled, MenuButton } from "./index";

const Header: FC = (): ReactElement => {
  const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth >= 1120);
  const [isMobMenuOpen, setIsMobMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = (): void => {
    setIsDesktop(window.innerWidth >= 1120);
  };

  const handleBurgerClick = (): void => {
    setIsMobMenuOpen(true);
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
        <MenuButton type="button" onClick={handleBurgerClick}>
          <Icon iconId="burger" />
        </MenuButton>
      )}

      <MobileMenu isOpened={isMobMenuOpen} onClose={() => setIsMobMenuOpen(false)} />
    </HeaderStyled>
  );
};

export default Header;
