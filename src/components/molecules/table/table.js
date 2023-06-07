import React from "react";
import { TableEl } from "./table.styled";

const Table = ({ preset, info }) => {
  const raceResults = info[0].Results;
  console.log(raceResults);

  return (
    <TableEl preset={preset}>
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
        {preset === "ProstVsSenna" &&
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
          ))}
        {preset === "other" &&
          raceResults.map((el, index) => (
            <tr key={index}>
              <td className="position">{el.position}</td>
              <td className="name">
                {el.Driver.givenName} {el.Driver.familyName}
              </td>
              <td className="constructor">{el.Constructor.name}</td>
              <td className="status">{el.status}</td>
              <td className="points">{el.points}</td>
            </tr>
          ))}
      </tbody>
    </TableEl>
  );
};

export default Table;
