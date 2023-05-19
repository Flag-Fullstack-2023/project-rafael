import styled from "styled-components";
import { theme } from "../../../theme";

export const Container = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
  color: ${theme.colors.white};
  background-color: ${theme.colors.darkGrey};
  opacity: 40%;
  z-index: 99;
  font-size: 4rem;
  height: 100%;
  cursor: pointer;
`;
