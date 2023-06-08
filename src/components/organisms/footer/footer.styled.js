import styled from "styled-components";
import { theme } from "../../../theme/theme";
import { breakpoints } from "../../../utils/breakpoints";

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
    width: 100vw;
    grid-template-columns: 1fr;
    gap: 10rem;
    justify-items: center;

    .social-col {
      gap: 8rem;
    }

    @media ${breakpoints.forLaptop} {
      grid-template-columns: repeat(3, 1fr);
      align-items: center;
      gap: 20rem;

      .social-col {
        gap: 5rem;
      }
    }
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
`;
