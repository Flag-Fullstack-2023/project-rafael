import React from "react";
import { CellEl } from "./gallery-cell.styled";
import { dummyArray } from "../../../dummyArray";

const Cell = ({ driver, index }) => {
  return (
    <CellEl>
      <img src={dummyArray[driver].images[index]} alt="" />
    </CellEl>
  );
};

export default Cell;
