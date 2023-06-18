import { breakpoints } from "_utils/breakpoints";
import styled from "styled-components";

export const CarWrapper = styled.div`
  aspect-ratio: 3/2;

  @media ${breakpoints.forTablet} {
    aspect-ratio: auto;
    min-height: 30rem;
    max-height: 40rem;
  }
`;

export const TableWrapper = styled.article`
  display: flex;
  justify-content: center;
  position: relative;
`;
