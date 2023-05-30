import styled from "styled-components";
import { theme } from "../../../theme";

export const InputWrapper = styled.div`
  position: relative;
  input {
    padding: 0.5rem 0.2rem;
    border-radius: 0.5rem;
    width: 100%;
  }
  p {
    color: ${theme.colors.marlboroRed};
    position: absolute;
    top: 0;
    right: 0;
  }
`;
