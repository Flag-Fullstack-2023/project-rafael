import React from "react";
import { TableEl } from "./table.styled";

const Table = ({ preset, info }) => {
  const raceResults = info[0].Results;

  return (
    <TableEl preset={preset}>
      <thead className="head">
        <tr className="head__row">
          {preset === "ProstVsSenna" && (
            <th className="head__row_gp">Grand Prix</th>
          )}
          {preset === "ProstVsSenna" && (
            <th className="head__row_date">Date</th>
          )}
          <th>Position</th>
          {preset === "other" && <th className="head__row_driver">Driver</th>}
          {preset === "other" && (
            <th className="head__row_team">Constructor</th>
          )}
          {preset === "other" && <th className="head__row_status">Status</th>}
          <th>Points</th>
        </tr>
      </thead>

      <tbody className="body">
        {preset === "ProstVsSenna" &&
          info.map((el, index) => (
            <tr className="body__row" key={index}>
              <td className="body__row_location">
                {`${
                  el.Circuit.circuitId.charAt(0).toUpperCase() +
                  el.Circuit.circuitId.slice(1)
                }, ${el.Circuit.Location.country}`}
              </td>
              <td className="body__row_date">{el.date}</td>
              <td className="name">{el.Results[0].position}</td>
              <td className="points">{el.Results[0].points}</td>
            </tr>
          ))}
        {preset === "other" &&
          raceResults.map((el, index) => (
            <tr className="body__row" key={index}>
              <td className="body__row_position">{el.position}</td>
              <td className="body__row_name">
                {el.Driver.givenName} {el.Driver.familyName}
              </td>
              <td className="body__row_team">{el.Constructor.name}</td>
              <td className="body__row_status">{el.status}</td>
              <td className="body__row_points">{el.points}</td>
            </tr>
          ))}
      </tbody>
    </TableEl>
  );
};

export default Table;
