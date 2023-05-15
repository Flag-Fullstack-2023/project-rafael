import styled from "styled-components";

export const QuoteEl = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  position: absolute;
  color: white;
  width: 100rem;
  top: 20%;
  left: 5%;

  .quote__text {
    font-size: 6.5rem;
    font-weight: 600;
  }
  .quote__author {
    position: absolute;
    bottom: -5%;
    right: 55%;
  }
`;
