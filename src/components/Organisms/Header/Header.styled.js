import styled from "styled-components";
import { theme } from "../../../theme";

export const HeaderEl = styled.header`
  /* background-color: ${(props) => props.theme.darkGrey}; */

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 8rem;
  padding: 1rem 3.2rem;
  position: fixed;
  width: 100%;
  z-index: 9999;
  transition: all ease-in-out 0.4s;

  &.header_bg {
    background-color: ${theme.colors.darkGrey};
  }
`;
