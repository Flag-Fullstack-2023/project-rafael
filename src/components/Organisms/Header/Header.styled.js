import styled from "styled-components";

export const HeaderEl = styled.header`
  /* background-color: ${(props) => props.theme.darkGrey}; */

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 4.8rem;
  padding: 1rem 3.2rem;
  position: fixed;
  width: 100%;
  z-index: 9999;
`;
