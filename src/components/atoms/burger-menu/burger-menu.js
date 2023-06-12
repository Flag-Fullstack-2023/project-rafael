import React from "react";

import { Container } from "./burger-menu.styled";

export const BurgerMenu = ({ clicked, openMenu }) => {
  return (
    <Container className="burger_container" onClick={openMenu}>
      <div className={`menu_icon ${clicked ? "clicked" : ""}`}>
        <span className="one"></span>
        <span className="two"></span>
        <span className="three"></span>
      </div>
    </Container>
  );
};
export default BurgerMenu;
