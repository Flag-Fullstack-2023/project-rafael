import styled from "styled-components";
import { theme } from "../../../theme/theme";

export const InputWrapper = styled.div`
  position: relative;

  p {
    color: ${theme.colors.marlboroRed};
    position: absolute;
    top: 0;
    right: 0;
  }
`;
