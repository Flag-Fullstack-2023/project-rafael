import React from "react";
import styled from "styled-components";
import NavLink from "./NavLink";
import MenuIcon from "./MenuIcon";

const NavBarEl = styled.nav`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  gap: 3.2rem;
`;

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
