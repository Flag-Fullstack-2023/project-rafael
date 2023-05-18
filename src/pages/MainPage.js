import React from "react";
import styled from "styled-components";
import LandingPage from "../components/pages/landing-page.js";
import CarSection from "../components/pages/car-section";
import Button from "../components/atoms/button/button.js";

const Main = styled.main`
  background-color: ${(props) => props.theme.colors.darkGrey};
  margin: 0 auto;
  width: 100vw;
`;

const MainPage = () => {
  return (
    <Main>
      <LandingPage />
      <CarSection preset="dark"></CarSection>
      <Button preset="primary"></Button>
    </Main>
  );
};

export default MainPage;
