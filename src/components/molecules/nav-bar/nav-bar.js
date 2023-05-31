import { useContext } from "react";
import NavLink from "../../atoms/nav-link/nav-link";
import { BurgerMenu } from "../../atoms/burger-menu/burger-menu";
import { NavContext } from "../../../context/nav-context";
import { NavBarEl } from "./nav-bar.styled";
const NavBar = () => {
  const { navClass } = useContext(NavContext);

  return (
    <>
      <NavBarEl className={navClass}>
        <NavLink>The Car</NavLink>
        <NavLink>Alain Prost</NavLink>
        <NavLink>Ayrton Senna</NavLink>
        <NavLink>1989 Championship</NavLink>
      </NavBarEl>
      <BurgerMenu />
    </>
  );
};

export default NavBar;
