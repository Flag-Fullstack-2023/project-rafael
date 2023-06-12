import styled from "styled-components";
import { breakpoints } from "_utils/breakpoints";

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

  a {
    color: ${(props) => props.theme.colors.white};
    cursor: pointer;
    display: inline-block;
    position: relative;
    font-size: 1.777rem;

    :after {
      bottom: 0;
      content: "";
      height: 2px;
      left: 0;
      position: absolute;
      transform: scaleX(0);
      width: 100%;
      background-color: ${(props) => props.theme.colors.marlboroRed};
      transform-origin: bottom right;
      transition: transform ease-out 0.25s;
    }

    :hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }

    @media ${breakpoints.untilLaptop} {
      font-size: 3.157rem;
    }
  }

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
