import styled from "styled-components";

export const TextEl = styled.p`
  color: ${(props) => props.theme[props.preset].color};
  /* padding: 0 5rem; */
  line-height: 1.9;
`;
