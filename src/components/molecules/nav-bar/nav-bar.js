import { useContext } from "react";
import { HashLink } from "react-router-hash-link";

import { BurgerMenu } from "_atoms";

import { NavContext } from "_context/nav-context";

import { NavBarEl } from "./nav-bar.styled";

const NavBar = () => {
  const { navClass } = useContext(NavContext);

  return (
    <>
      <NavBarEl className={navClass}>
        <HashLink smooth to="/#1">
          The Car
        </HashLink>
        <HashLink smooth to="/#Alain Prost">
          Alain Prost
        </HashLink>
        <HashLink smooth to="/#Ayrton Senna">
          Ayrton Senna
        </HashLink>
        <HashLink smooth to="/#Championship">
          1989 Championship
        </HashLink>
      </NavBarEl>
      <BurgerMenu />
    </>
  );
};

export default NavBar;
