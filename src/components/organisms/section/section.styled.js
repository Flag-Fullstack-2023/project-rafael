import styled from "styled-components";
import { breakpoints } from "../../../utils/breakpoints";

export const SectionEl = styled.section`
  background-color: ${(props) => props.theme[props.variant].background};
  color: ${(props) => props.theme[props.variant].color};
  padding: 10rem 0 20rem;
  display: grid;
  align-content: center;
  justify-content: center;

  @media ${breakpoints.forBigMobile} {
    padding-bottom: 10rem;
  }
`;

export const SectionContent = styled.article`
  display: flex;
  flex-direction: ${({ preset }) => {
    switch (preset) {
      case "text-first":
        return "row-reverse";
      case "column":
        return "column";
      default:
        return "row";
    }
  }};
  gap: 6rem;
  padding: 0 10rem;
  max-width: 1920px;
  align-items: center;

  a {
    width: fit-content;
  }

  @media ${breakpoints.forBigMobile} {
    flex-direction: column;

    > div {
      width: calc(100vw - 1rem);
    }
  }
`;
