import styled from "styled-components";

export const Overlay = styled.div`
  background: rgb(57, 66, 61);
  background: linear-gradient(
    180deg,
    rgba(57, 66, 61, 0) 0%,
    rgba(20, 20, 20, 1) 95%
  );
  height: 100%;
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;

  svg {
    fill: white;
    font-size: 7rem;
    position: absolute;
    bottom: 3%;
    transition: all ease-in-out 0.4s;

    :hover {
      bottom: 2%;
      cursor: pointer;
    }
  }
`;
