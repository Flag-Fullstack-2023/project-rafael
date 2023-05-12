import React from "react";
import styled from "styled-components";

const Main = styled.main`
  background-color: ${(props) => props.theme.darkGrey};
  margin: 0 auto;
  max-width: 120rem;
  height: 400px;
`;

const MainPage = () => {
  return <Main></Main>;
};

export default MainPage;
