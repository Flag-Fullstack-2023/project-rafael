import styled from "styled-components";
import { theme } from "_theme/theme";

export const IconContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.black};
  opacity: 40%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  margin: ${(props) => (props.pageType === "form" ? "-4rem 0" : "0")};

  svg {
    font-size: 6rem;
    animation: rotation 0.4s infinite linear;
    fill: red;

    @keyframes rotation {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(359deg);
      }
    }
  }
`;
