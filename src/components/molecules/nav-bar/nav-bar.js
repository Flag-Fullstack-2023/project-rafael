import NavLink from "../../atoms/nav-link/nav-link";
import { BurgerMenu } from "../../atoms/burger-menu/burger-menu";

import NavProvider from "../../../context/nav-context";

import { NavBarEl } from "./nav-bar.styled";

const NavBar = () => {
  // useContext

  return (
    <NavProvider>
      <NavBarEl className={"navClass"}>
        <NavLink>The Car</NavLink>
        <NavLink>Alain Prost</NavLink>
        <NavLink>Ayrton Senna</NavLink>
        <NavLink>1989 Championship</NavLink>
      </NavBarEl>
      <BurgerMenu />
    </NavProvider>
  );
};

export default NavBar;
