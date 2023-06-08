import styled from "styled-components";
import { breakpoints } from "../../../utils/breakpoints";

export const TextWrapper = styled.div`
  color: ${(props) => props.theme[props.variant].color};
  line-height: 1.9;
  overflow: visible;

  @media ${breakpoints.forLaptop} {
    aspect-ratio: 3/2;
    overflow: auto;
  }
`;
