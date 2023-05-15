import React from "react";
import { NavBarEl } from "./NavBar.styled";
import NavLink from "../../Atoms/nav-link/NavLink";
import MenuIcon from "../../../Layout/Header/MenuIcon";

const NavBar = () => {
  return (
    <NavBarEl>
      <MenuIcon></MenuIcon>
      <NavLink>The Car</NavLink>
      <NavLink>Alain Prost</NavLink>
      <NavLink>Ayrton Senna</NavLink>
      <NavLink>1989 Championship</NavLink>
    </NavBarEl>
  );
};

export default NavBar;
