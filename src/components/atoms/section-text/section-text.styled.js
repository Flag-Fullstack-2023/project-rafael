import styled from "styled-components";

export const TextEl = styled.div`
  color: ${(props) => props.theme[props.preset].color};
  /* padding: 0 5rem; */
  line-height: 1.9;
  max-width: 700px;
  max-height: 500px;
  overflow: auto;
`;
