import React from "react";
import styled from "styled-components";
import LandingPage from "../components/pages/landing-page.js";
import CarSection from "../components/pages/car-section";
import ProstSection from "../components/pages/prost-section.js";
import SennaSection from "../components/pages/senna-section.js";
import axios from "axios";

const Main = styled.main`
  margin: 0 auto;
  width: 100vw;
`;

axios
  .get("https://6467aee160c8cb9a2c9a978a.mockapi.io/f1-flag/drivers")
  .then((response) => {
    console.log(response.data);
  });

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
