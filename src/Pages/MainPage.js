import React from "react";
import styled from "styled-components";
import SectionEl from "../Layout/Section/SectionBody.js";

const Main = styled.main`
  background-color: ${(props) => props.theme.darkGrey};
  margin: 0 auto;
  width: 90vw;
`;

const MainPage = () => {
  return (
    <Main>
      <SectionEl></SectionEl>
    </Main>
  );
};

export default MainPage;
