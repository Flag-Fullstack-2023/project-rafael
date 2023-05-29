import styled from "styled-components";
import { theme } from "../../../theme";

export const FooterEl = styled.footer`
  background-color: ${theme.colors.darkGrey};
  color: ${theme.colors.white};
  min-height: 20rem;
  border-top: 1px solid ${theme.colors.marlboroRed};
  padding: 10rem 10rem;

  .container-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20rem;
  }

  .logo-col {
  }

  .social-col {
    color: ${theme.colors.marlboroRed};
    display: flex;
    align-items: end;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 5rem;

    svg {
      width: 2.8rem;
      height: auto;
    }
  }

  .form-col {
    background-color: aqua;
  }
`;
