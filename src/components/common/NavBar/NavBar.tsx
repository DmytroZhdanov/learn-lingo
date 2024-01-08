import { FC, ReactElement } from "react";
import { NavLink } from "react-router-dom";

import { ROUTER } from "../../../App";
import { Nav } from "./index";

type TNavBarProps = {
  onClose?: () => void;
};

const NavBar: FC<TNavBarProps> = ({ onClose }): ReactElement => {
  const handleClick = () => {
    if (!onClose) return;

    onClose();
  };

  return (
    <Nav>
      <NavLink
        to={ROUTER.MAIN}
        className={({ isActive }) => (isActive ? "active" : "")}
        onClick={handleClick}
      >
        {ROUTER.HOME}
      </NavLink>

      <NavLink
        to={ROUTER.TEACHERS}
        className={({ isActive }) => (isActive ? "active" : "")}
        onClick={handleClick}
      >
        {ROUTER.TEACHERS}
      </NavLink>

      <NavLink
        to={ROUTER.FAVORITES}
        className={({ isActive }) => (isActive ? "active" : "")}
        onClick={handleClick}
      >
        {ROUTER.FAVORITES}
      </NavLink>
    </Nav>
  );
};

export default NavBar;
