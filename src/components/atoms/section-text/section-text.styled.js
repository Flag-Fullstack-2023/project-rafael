import styled from "styled-components";

export const TextWrapper = styled.div`
  color: ${(props) => props.theme[props.preset].color};
  line-height: 1.9;
  width: 700px;
  aspect-ratio: 3/2;
  overflow: auto;
`;
