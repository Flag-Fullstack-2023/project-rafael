import styled from "styled-components";
import { theme } from "../../../theme/theme";

export const TableEl = styled.table`
  width: 800px;
  margin: 0 auto;
  border-collapse: collapse;

  thead {
    font-size: 1.777rem;
    border-bottom: 1px solid ${theme.colors.marlboroRed};
  }

  th {
    padding-left: 0 1rem;
    text-align: start;
  }

  tbody {
    tr {
      :nth-child(odd) {
        background-color: ${({ preset }) => {
          if (preset === "other") {
            return theme.colors.darkGrey;
          } else if (preset === "ProstVsSenna") {
            return theme.colors.lightGrey;
          }
        }};
      }
    }

    td {
      padding: 1rem;
      min-width: 100px;
    }
  }
`;
