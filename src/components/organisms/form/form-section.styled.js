import styled from "styled-components";
import { theme } from "_theme/theme";
import { breakpoints } from "_utils/breakpoints";

export const Article = styled.article`
  background-color: ${theme.colors.darkGrey};
  color: ${theme.colors.white};
  padding: 10rem 0 20rem;
  display: grid;
  align-content: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    background-color: ${theme.colors.jetGrey};
    position: relative;
    align-items: center;

    .form-inputs {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      max-width: 30rem;
      flex-wrap: wrap;
      padding: 1rem;
      align-items: stretch;
    }

    select {
      outline: none;
      border: none;
      padding: 1rem;
      border-radius: 0.5rem;
      width: 100%;
    }

    & > p {
      color: ${theme.colors.marlboroRed};
      margin: 0 auto;
    }
  }

  @media ${breakpoints.forBigMobile} {
    width: calc(100vw- 1rem);

    form {
      margin: 0 auto;
      width: calc(100% - 1rem);
      padding: 2rem 1rem;

      .form-inputs {
        width: calc(100% - 1rem);
        flex-direction: column;
        align-items: stretch;
        padding: 1 rem;
        gap: 2rem;
      }
    }
  }

  @media ${breakpoints.forLaptop} {
    form {
      width: 90rem;
      padding: 4rem 0;
      gap: 4rem;

      .form-inputs {
        max-width: 100%;
        flex-direction: row;
        align-items: end;
        justify-content: space-evenly;
      }
    }
  }
`;
