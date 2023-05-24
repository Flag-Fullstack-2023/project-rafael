import styled from "styled-components";

export const TextEl = styled.div`
  color: ${(props) => props.theme[props.preset].color};
  line-height: 1.9;
  max-width: 700px;
  aspect-ratio: 3/2;
  overflow: auto;
`;
