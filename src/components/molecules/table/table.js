import React from "react";
import { TableEl } from "./table.styled";

const Table = ({ info }) => {
  return (
    <TableEl>
      <thead>
        <tr>
          <th>Grand Prix</th>
          <th>Date</th>
          <th>Position</th>
          <th>Points</th>
        </tr>
      </thead>

      <tbody>
        {info.map((el) => (
          <tr>
            <td>
              {`${
                el.Circuit.circuitId.charAt(0).toUpperCase() +
                el.Circuit.circuitId.slice(1)
              }, ${el.Circuit.Location.country}`}
            </td>
            <td>{el.date}</td>
            <td className="name">{el.Results[0].position}</td>
            <td className="points">{el.Results[0].points}</td>
          </tr>
        ))}
      </tbody>
    </TableEl>
  );
};

export default Table;
