import { useState, useContext } from "react";
import { HashLink } from "react-router-hash-link";

import { BurgerMenu } from "_atoms";

import { NavContext } from "_context/nav-context";

import { NavBarEl } from "./nav-bar.styled";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { navClass, setNavClass } = useContext(NavContext);

  const linkOnClickHandler = () => {
    console.log("clicked");
    navClass === "" ? setNavClass("nav_open") : setNavClass("");
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavBarEl className={navClass}>
        <HashLink smooth to="/#1" onClick={linkOnClickHandler}>
          The Car
        </HashLink>
        <HashLink smooth to="/#Alain Prost" onClick={linkOnClickHandler}>
          Alain Prost
        </HashLink>
        <HashLink smooth to="/#Ayrton Senna" onClick={linkOnClickHandler}>
          Ayrton Senna
        </HashLink>
        <HashLink smooth to="/#Championship" onClick={linkOnClickHandler}>
          1989 Championship
        </HashLink>
      </NavBarEl>
      <BurgerMenu clicked={isOpen} openMenu={linkOnClickHandler} />
    </>
  );
};

export default NavBar;
