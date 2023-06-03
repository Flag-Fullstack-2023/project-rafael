import { theme } from "src/theme/theme";
import styled from "styled-components";

export const FormWrapper = styled.section`
  background-color: ${theme.colors.darkGrey};
  color: ${theme.colors.white};
  padding: 10rem 0 20rem;
  display: grid;
  align-content: center;
  justify-content: center;
  height: 100vh;

  form {
    display: flex;
    flex-direction: column;
    width: 80rem;
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
  }
`;
