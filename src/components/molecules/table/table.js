import React from "react";
import { TableEl } from "./table.styled";

const Table = ({ preset, info }) => {
  return (
    <TableEl>
      <thead>
        <tr>
          {preset === "ProstVsSenna" && <th>Grand Prix</th>}
          {preset === "ProstVsSenna" && <th>Date</th>}
          <th>Position</th>
          {preset === "other" && <th>Driver</th>}
          {preset === "other" && <th>Constructor</th>}
          {preset === "other" && <th>Status</th>}
          <th>Points</th>
        </tr>
      </thead>

      <tbody>
        {
          (preset =
            "ProstVsSenns" &&
            info.map((el, index) => (
              <tr key={index}>
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
            )))
        }
        {preset === "other" &&
          info.map((el, index) => (
            <tr key={index}>
              <td>{`${el.position}`}</td>
              <td className="name">{el.driver}</td>
              <td className="constructor">{el.constructor}</td>
              <td className="status">{el.status}</td>
              <td className="points">{el.points}</td>
            </tr>
          ))}
      </tbody>
    </TableEl>
  );
};

export default Table;
