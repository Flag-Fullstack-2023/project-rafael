import React from "react";
import styled from "styled-components";
import SectionEl from "../layout/Section/SectionBody";
import LandingPage from "../components/pages/landing-page.js";

const Main = styled.main`
  background-color: ${(props) => props.theme.colors.darkGrey};
  margin: 0 auto;
  width: 100vw;
`;

const MainPage = () => {
  return (
    <Main>
      <LandingPage />
      <SectionEl></SectionEl>
    </Main>
  );
};

export default MainPage;
