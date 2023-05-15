import styled from "styled-components";

export const NavLinkEl = styled.a`
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
`;
