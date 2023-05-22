import React from "react";
import styled from "styled-components";
import LandingPage from "../components/pages/landing-page";
import CarSection from "../components/pages/car-section";
import ProstSection from "../components/pages/prost-section";
import SennaSection from "../components/pages/senna-section";

const Main = styled.main`
  margin: 0 auto;
  width: 100vw;
`;

const MainPage = () => {
  return (
    <Main>
      <LandingPage />
      <CarSection preset="dark" />
      <ProstSection preset="light" />
      <SennaSection preset="dark" />
    </Main>
  );
};

export default MainPage;
