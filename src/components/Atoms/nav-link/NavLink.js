import React from "react";
import { NavLinkEl } from "./NavLink.styled";

const NavLink = (props) => {
  const { children } = props;
  return <NavLinkEl>{children}</NavLinkEl>;
};

export default NavLink;
