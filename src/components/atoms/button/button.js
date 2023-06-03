import { ButtonEl } from "./button.styled.js";

const Button = (props) => {
  const { children, preset } = props;
  return <ButtonEl preset={preset}>{children}</ButtonEl>;
};

export default Button;
