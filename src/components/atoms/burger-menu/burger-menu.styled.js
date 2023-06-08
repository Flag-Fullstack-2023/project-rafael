import styled from "styled-components";
import { breakpoints } from "../../../utils/breakpoints";

export const Container = styled.button`
  display: none;

  @media ${breakpoints.untilLaptop} {
    display: flex;
    justify-content: flex-end;

    .menu_icon {
      width: 40px;
      height: 40px;
      margin: 0;
      z-index: 10;
      cursor: pointer;
      position: relative;
      display: flex;
      align-items: center;
      padding: 5px 0;
    }

    .menu_icon span {
      position: absolute;
      display: block;
      height: 5px;
      width: 40px;
      background-color: #fff;
      transform: rotate(0);
      transition: all 200ms cubic-bezier(0.895, 0.03, 0.685, 0.22);
    }

    span.one {
      top: 5px;
    }

    span.two {
      top: 20px;
    }

    span.three {
      top: 35px;
    }

    .clicked .one {
      transform: translateY(15px) rotate(45deg);
    }

    .clicked .two {
      opacity: 0;
    }

    .clicked .three {
      transform: translateY(-15px) rotate(-45deg);
    }
  }
`;
