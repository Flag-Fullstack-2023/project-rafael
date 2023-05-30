import styled from "styled-components";

export const ButtonEl = styled.button`
  background-color: ${(props) => props.theme[props.preset].background};
  border-radius: 0.5rem;
  color: ${(props) => props.theme.colors.white};
  cursor: ${(props) => props.theme[props.preset].cursor};
  font-size: ${(props) => props.theme[props.preset].font};
  font-weight: 500;
  padding: ${(props) => props.theme[props.preset].padding};
  border: ${(props) => props.theme[props.preset].border};
  text-align: center;
  transition: all ease-in-out 0.2s;
  margin: 4px;
  font-size: 1.333rem;

  :hover {
    background-color: ${(props) => props.theme[props.preset].onHoverBackground};
  }
`;
