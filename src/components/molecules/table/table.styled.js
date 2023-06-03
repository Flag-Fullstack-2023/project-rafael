import styled from "styled-components";
import { theme } from "../../../theme/theme";

export const TableEl = styled.table`
  width: 800px;

  thead {
    font-size: 1.777rem;
  }

  th {
    padding: 0 1rem;
    text-align: start;
    background-color: white;
  }

  tr {
    :nth-child(odd) {
      background-color: ${theme.colors.lightGrey};
    }
  }

  td {
    padding: 1rem;
    min-width: 100px;
  }

  .this {
    display: block;
  }
`;
