import styled from "styled-components";
import { breakpoints } from "../../../utils/breakpoints";

export const TextWrapper = styled.div`
  color: ${(props) => props.theme[props.variant].color};
  line-height: 1.9;
  width: 700px;
  aspect-ratio: 3/2;
  overflow: auto;

  @media ${breakpoints.forBigMobile} {
    aspect-ratio: 2/3;
  }
`;
