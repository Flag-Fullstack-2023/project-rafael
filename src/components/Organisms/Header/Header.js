import React, { useState } from "react";
import { HeaderEl } from "./Header.styled.js";
import NavBar from "../../Molecules/navbar/NavBar.js";
import Logo from "../../Atoms/logo/Logo.js";

const Header = () => {
  const [bgColor, setBgColor] = useState(false);

  const changeBgColor = () => {
    window.scrollY >= window.innerHeight ? setBgColor(true) : setBgColor(false);
  };

  console.log(window.innerHeight);

  window.addEventListener("scroll", changeBgColor);

  return (
    <HeaderEl className={bgColor ? "header_bg" : ""}>
      <Logo />
      <NavBar />
    </HeaderEl>
  );
};

export default Header;
