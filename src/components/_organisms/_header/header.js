import React, { useEffect, useState } from "react";
import { HeaderEl } from "./header.styled";
import { Logo } from "_components/_atoms";
import { NavBar } from "_components/_molecules";
import NavProvider from "../../../context/nav-context";
import { HashLink } from "react-router-hash-link";
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
        <HashLink smooth to={"/#"}>
          <Logo />
        </HashLink>
        <NavBar />
      </HeaderEl>
    </NavProvider>
  );
};

export default Header;
