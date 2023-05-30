import styled from "styled-components";

export const ChampionshipSection = styled.section`
  background-color: ${(props) => props.theme[props.preset].background};
  color: ${(props) => props.theme[props.preset]};
  padding: 10rem 0 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  width: 100%;
`;
