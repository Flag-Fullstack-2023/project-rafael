import styled from "styled-components";
import { breakpoints } from "_utils/breakpoints";

export const QuoteEl = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 80rem));
  position: absolute;
  color: white;
  padding: 2rem;
  top: 0;
  bottom: 0;
  margin: auto 5%;
  align-items: center;
  max-height: 70vh;

  .quote__text {
    font-size: 4rem;
    font-weight: 600;
  }
  .quote__author {
    align-self: start;
    justify-self: end;
  }

  @media ${breakpoints.forBigTablet} {
    .quote__text {
      font-size: 4.5rem;
    }
  }

  @media ${breakpoints.forBigTablet} {
    .quote__author {
      right: 10%;
    }
  }

  @media ${breakpoints.forLaptop} {
    .quote__text {
      font-size: 7rem;
    }
  }
`;
