import styled from "styled-components";

export const SectionContent = styled.article`
  display: flex;
  gap: 6rem;
  padding: 0 10rem;
  max-width: 1920px;
  flex-direction: ${(props) =>
    props.name === "Ayrton Senna" ? "row-reverse" : "row"};
`;

export const CarWrapper = styled.div`
  width: 700px;
  aspect-ratio: 3/2;
`;
