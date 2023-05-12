import styled from "styled-components";

const ButtonEl = styled.button`
  background-color: ${(props) => {
    switch (props.preset) {
      case "primary":
        return props.theme.marlboroRed;
      case "secondary":
        return props.theme.darkGrey;
      default:
        return props.theme.lightGrey;
    }
  }};
  border-radius: 0.5rem;
  color: ${(props) => props.theme.white};
  cursor: ${(props) => (!props.preset ? "auto" : "pointer")};
  font-size: ${(props) => (props.preset === "primary" ? "1.8rem" : "0.8rem")};
  font-weight: 500;
  padding: ${(props) =>
    props.preset === "primary" ? "1.2rem 2rem" : "0.8rem 1.6rem"};
  border: ${(props) =>
    props.preset === "secondary" ? "2px solid #C60000" : "none"};
  text-align: center;
  transition: all ease-in-out 0.2s;
  margin: 4px;

  :hover {
    background-color: ${(props) =>
      props.preset === "primary"
        ? props.theme.yellow
        : props.theme.marlboroRed};
  }
`;

const Button = (props) => {
  const { children, preset } = props;
  return <ButtonEl preset={preset}>{children}</ButtonEl>;
};

export default Button;
