import React, { useContext, useState } from "react";

import { NavContext } from "../../../context/nav-context";

import { Container } from "./burger-menu.styled";

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const NavBarContext = useContext(NavContext);

  const onClickHandler = () => {
    NavBarContext.navClass === ""
      ? NavBarContext.setNavClass("nav_open")
      : NavBarContext.setNavClass("");
    setIsOpen(!isOpen);
  };

  return (
    <Container className="burger_container" onClick={onClickHandler}>
      <div className={`menu_icon ${isOpen ? "clicked" : ""}`}>
        <span className="one"></span>
        <span className="two"></span>
        <span className="three"></span>
      </div>
    </Container>
  );
};
export default BurgerMenu;
