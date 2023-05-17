import styled from "styled-components";
import { breakpoints } from "../../../utils/breakpoints";

export const NavBarEl = styled.nav`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  gap: 5rem;

  .burger_container {
    display: none;
  }

  @media (max-width: 1195px) {
    gap: 2rem;
  }

  /**************************/
  /*      BELOW 1079px      */
  /**************************/

  @media ${breakpoints.untilLaptop} {
    background-color: rgba(0, 0, 0, 0.97);
    flex-direction: column;
    position: absolute;
    gap: 4.8rem;
    height: 100vh;
    justify-content: center;
    left: 0;
    top: 0;
    opacity: 0;
    pointer-events: none;
    transform: translateX(100%);
    transition: all 0.5s ease-in;
    visibility: hidden;
    width: 100%;

    .clicked {
      opacity: 1;
      pointer-events: auto;
      visibility: visible;
      transform: translateX(0);
    }

    a {
      display: inline-block;
    }

    .burger_container {
      display: flex;
    }

    &.nav_open {
      opacity: 1;
      pointer-events: auto;
      visibility: visible;
      transform: translateX(0);
    }
  }
`;
