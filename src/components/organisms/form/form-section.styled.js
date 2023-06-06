import styled from "styled-components";
import { theme } from "_theme/theme";

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
    width: 90rem;
    border-radius: 1rem;
    background-color: ${theme.colors.jetGrey};
    padding: 4rem 0;
    gap: 4rem;

    .form-inputs {
      display: flex;
      align-items: end;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }

    .form-action {
      margin: 0 auto;
    }

    select {
      outline: none;
      border: none;
      padding: 1rem;
      border-radius: 0.5rem;
      width: 100%;

      &:invalid {
        color: ${theme.colors.lightGrey};
      }
    }
  }
`;
