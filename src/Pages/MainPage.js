import React from "react";
import NavBar from "../Layout/Navbar/NavBar";
import styled from "styled-components";
import Button from "../components/Button/Button";

const Main = styled.main`
  background-color: ${(props) => props.theme.darkGrey};
  margin: 0 auto;
  max-width: 120rem;
  height: 400px;
`;

const MainPage = () => {
  return (
    <Main>
      <NavBar />
      <Button preset="primary">FIND OUT</Button>
      <Button preset="secondary">SIGN UP</Button>
    </Main>
  );
};

export default MainPage;
