import styled from "styled-components";

export const SectionEl = styled.section`
  background-color: ${(props) => props.theme[props.preset].background};
  height: 100vh;
  color: ${(props) => props.theme[props.preset]};
  margin: 10rem auto;
`;
