import styled from "styled-components";

export const Title = styled.h2`
  color: ${(props) => props.theme[props.preset].color};
  text-align: center;
  margin-bottom: 10rem;
`;
