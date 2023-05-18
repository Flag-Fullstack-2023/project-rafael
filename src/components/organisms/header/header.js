import React, { useState } from "react";
import { HeaderEl } from "./header.styled.js";
import NavBar from "../../molecules/nav-bar/nav-bar.js";
import Logo from "../../atoms/logo/logo.js";

const Header = () => {
  const [bgColor, setBgColor] = useState(false);

  const changeBgColor = () => {
    window.scrollY >= 90 ? setBgColor(true) : setBgColor(false);
  };

  window.addEventListener("scroll", changeBgColor);

  return (
    <HeaderEl className={bgColor ? "header_bg" : ""}>
      <Logo />
      <NavBar />
    </HeaderEl>
  );
};

export default Header;
