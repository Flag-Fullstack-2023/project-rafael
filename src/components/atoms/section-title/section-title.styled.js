import styled from "styled-components";

export const Title = styled.h2`
  background-color: ${(props) => props.theme[props.preset].background};
  color: ${(props) => props.theme[props.preset].color};
  text-align: center;
`;
