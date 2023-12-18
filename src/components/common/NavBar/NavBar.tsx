import { FC, ReactElement } from "react";
import { NavLink } from "react-router-dom";

import { ROUTER } from "../../../App";
import { Nav } from "./index";

const NavBar: FC = (): ReactElement => {
  return (
    <Nav>
      <NavLink to={ROUTER.MAIN} className={({ isActive }) => (isActive ? "active" : "")}>
        {ROUTER.HOME}
      </NavLink>

      <NavLink to={ROUTER.TEACHERS} className={({ isActive }) => (isActive ? "active" : "")}>
        {ROUTER.TEACHERS}
      </NavLink>

      <NavLink to={ROUTER.FAVORITES} className={({ isActive }) => (isActive ? "active" : "")}>
        {ROUTER.FAVORITES}
      </NavLink>
    </Nav>
  );
};

export default NavBar;
