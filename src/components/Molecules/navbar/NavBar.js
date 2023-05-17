import { NavBarEl } from "./NavBar.styled";
import NavLink from "../../Atoms/nav-link/NavLink";
import BurgerMenu from "../../Atoms/burger-menu/BurgerMenu";
import { createContext } from "react";
import { useState } from "react";

export const NavContext = createContext();

const NavBar = () => {
  const [navClass, setNavClass] = useState("");

  return (
    <NavContext.Provider value={{ navClass, setNavClass }}>
      <NavBarEl className={navClass}>
        <NavLink>The Car</NavLink>
        <NavLink>Alain Prost</NavLink>
        <NavLink>Ayrton Senna</NavLink>
        <NavLink>1989 Championship</NavLink>
      </NavBarEl>
      <BurgerMenu />
    </NavContext.Provider>
  );
};

export default NavBar;
