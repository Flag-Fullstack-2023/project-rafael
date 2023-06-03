import { useContext } from "react";
import { BurgerMenu } from "_components/_atoms";
import { NavContext } from "../../../context/nav-context";
import { NavBarEl } from "./nav-bar.styled";
import { HashLink } from "react-router-hash-link";
const NavBar = () => {
  const { navClass } = useContext(NavContext);

  return (
    <>
      <NavBarEl className={navClass}>
        <HashLink smooth to="/#CarSection">
          The Car
        </HashLink>
        <HashLink smooth to="/#AlainProst">
          Alain Prost
        </HashLink>
        <HashLink smooth to="/#AyrtonSenna">
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
