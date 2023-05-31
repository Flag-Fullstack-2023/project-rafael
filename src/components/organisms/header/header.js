import React, { useEffect, useState } from "react";
import { HeaderEl } from "./header.styled";
import NavBar from "../../molecules/nav-bar/nav-bar";
import Logo from "../../atoms/logo/logo";
import NavProvider from "../../../context/nav-context";

const Header = () => {
  const [bgColor, setBgColor] = useState(false);

  const changeBgColor = () => {
    window.scrollY >= 90 ? setBgColor(true) : setBgColor(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBgColor);
    return () => window.removeEventListener("scroll", changeBgColor);
  }, []);

  return (
    <NavProvider>
      <HeaderEl className={bgColor ? "header_bg" : ""}>
        <Logo />
        <NavBar />
      </HeaderEl>
    </NavProvider>
  );
};

export default Header;
