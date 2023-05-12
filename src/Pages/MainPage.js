import React from "react";
import styled from "styled-components";
import NavBar from "../Layout/Header/NavBar";
import Header from "../Layout/Header/Header";

const Main = styled.main`
  background-color: ${(props) => props.theme.marlboroRed};
  margin: 0 auto;
  max-width: 120rem;
`;

const MainPage = () => {
  return (
    <Main>
      <Header></Header>
    </Main>
  );
};

export default MainPage;
