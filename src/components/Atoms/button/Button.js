import styled from "styled-components";
import { ButtonEl } from "./Button.styled";

const Button = (props) => {
  const { children, preset } = props;
  return <ButtonEl preset={preset}>{children}</ButtonEl>;
};

export default Button;
