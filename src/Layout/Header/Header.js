import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import Logo from "./Logo";

const HeaderEl = styled.header`
  align-content: center;
  background-color: ${(props) => props.theme.darkGrey};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 4.8rem;
  padding: 0 3.2rem;
  position: fixed;
  width: 100vw;
  z-index: 9999;
`;

const Header = () => {
  return (
    <HeaderEl>
      <Logo />
      <NavBar />
    </HeaderEl>
  );
};

export default Header;
