import { NavBarEl } from "./nav-bar.styled";
import NavLink from "../../atoms/nav-link/nav-link";
import { BurgerMenu } from "../../atoms/_burger-menu/burger-menu";
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
