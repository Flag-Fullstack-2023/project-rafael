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
  color: ${(props) => props.theme.white};
  border-radius: 0.5rem;
  font-size: 1.8rem;
  padding: 1.2rem 2rem;
  cursor: pointer;
  font-weight: 500;
  text-align: center;
`;

const Button = (props) => {
  const { preset } = props;
  return <ButtonEl preset={preset}></ButtonEl>;
};

export default Button;
