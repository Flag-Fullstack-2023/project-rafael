import styled from "styled-components";

export const SectionEl = styled.section`
  background-color: ${(props) => props.theme[props.preset].background};
  color: ${(props) => props.theme[props.preset]};
  padding: 10rem 0 20rem;
  display: grid;
  align-content: center;
  justify-content: center;
`;
