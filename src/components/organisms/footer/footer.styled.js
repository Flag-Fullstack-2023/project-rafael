import styled from "styled-components";
import { theme } from "../../../theme";

export const FooterEl = styled.footer`
  background-color: ${theme.colors.darkGrey};
  color: ${theme.colors.white};
  min-height: 20rem;
  border-top: 1px solid ${theme.colors.marlboroRed};
  padding: 5rem;
  display: flex;
  justify-content: space-evenly;

  .container-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20rem;
  }

  .logo-col {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .social-col {
    display: flex;
    align-items: end;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 5rem;

    svg {
      width: 2.8rem;
      height: auto;
      fill: ${theme.colors.marlboroRed};
    }
  }

  .subscribe-col {
  }
`;
