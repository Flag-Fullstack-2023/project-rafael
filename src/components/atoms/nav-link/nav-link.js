import React from "react";
import { NavLinkEl } from "./nav-link-styled";

const NavLink = (props) => {
  const { children } = props;
  return <NavLinkEl>{children}</NavLinkEl>;
};

export default NavLink;
