import React from "react";
import styled from "styled-components";
import SectionEl from "../Layout/Section/SectionBody.js";
import LandingPage from "../containers/Landing Page/LandingPage.js";
import Button from "../components/Atoms/button/Button.js";

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
