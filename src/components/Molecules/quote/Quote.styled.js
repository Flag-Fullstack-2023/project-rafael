import styled from "styled-components";
import { breakpoints } from "../../../utils/breakpoints";

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
    font-size: 7rem;
    font-weight: 600;
  }
  .quote__author {
    align-self: start;
    justify-self: end;
  }

  @media ${breakpoints.forBigTablet} {
    .quote__author {
      right: 10%;
    }
  }

  @media (max-width: 526px) {
    .quote__text {
      font-size: 5rem;
    }
  }

  @media ${breakpoints.forBigMobile} {
    .quote__text {
      font-size: 4.5rem;
    }
  }
  @media (max-width: 375px) {
    .quote__text {
      /* font-size: calc([minimum size] + ([maximum size] - [minimum size]) * ((100vw - [minimum viewport width]) / ([maximum viewport width] - [minimum viewport width]))); */
      font-size: 4.5rem;
    }
  }
`;
