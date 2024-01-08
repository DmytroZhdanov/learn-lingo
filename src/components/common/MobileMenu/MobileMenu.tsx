import { FC, ReactElement, useRef } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";

import { MenuDiv, CloseButton } from "./index";
import Icon from "../Icon";
import NavBar from "../NavBar";
import AuthBar from "../AuthBar";

type TMobMenuProps = {
  onClose: () => void;
  isOpened: boolean;
};

const MobileMenu: FC<TMobMenuProps> = ({ onClose, isOpened }): ReactElement => {
  const mobileMenuRoot = document.querySelector("#mobile-menu-root") as HTMLElement;
  const mobileMenuRef = useRef(null);

  return createPortal(
    <CSSTransition
      in={isOpened}
      nodeRef={mobileMenuRef}
      timeout={400}
      classNames="modal"
      unmountOnExit
    >
      <MenuDiv ref={mobileMenuRef}>
        <CloseButton type="button" onClick={onClose}>
          <Icon iconId="close" />
        </CloseButton>

        <NavBar onClose={onClose} />

        <AuthBar />
      </MenuDiv>
    </CSSTransition>,
    mobileMenuRoot
  );
};

export default MobileMenu;
