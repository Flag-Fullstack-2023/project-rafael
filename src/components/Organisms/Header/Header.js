import React from "react";
import { HeaderEl } from "./Header.styled.js";
import NavBar from "../../Molecules/navbar/NavBar.js";
import Logo from "../../Atoms/logo/Logo.js";

const Header = () => {
  return (
    <HeaderEl>
      <Logo />
      <NavBar />
    </HeaderEl>
  );
};

export default Header;
