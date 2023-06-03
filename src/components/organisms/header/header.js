import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";

import { Logo } from "_atoms";
import { NavBar } from "_molecules";

import NavProvider from "_context/nav-context";

import { HeaderEl } from "./header.styled";

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
