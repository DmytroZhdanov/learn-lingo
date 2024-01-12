import { FC, ReactElement } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { Nav } from "./index";

import { ROUTER } from "../../../App";
import { selectRefreshToken } from "../../../redux/auth/selectors";

type TNavBarProps = {
  onMobMenuClose?: () => void;
};

const NavBar: FC<TNavBarProps> = ({ onMobMenuClose }): ReactElement => {
  const refreshToken = useSelector(selectRefreshToken);

  const handleClick = (): void => {
    if (!onMobMenuClose) return;

    onMobMenuClose();
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

      {refreshToken && (
        <NavLink
          to={ROUTER.FAVORITES}
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={handleClick}
        >
          {ROUTER.FAVORITES}
        </NavLink>
      )}
    </Nav>
  );
};

export default NavBar;
