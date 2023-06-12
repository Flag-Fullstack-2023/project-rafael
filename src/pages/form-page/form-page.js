import React, { useEffect, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { ERGAST_URL } from "_api/api";

import { Button } from "_atoms";
import { Table } from "_molecules";
import { FormSection } from "_organisms";
import axios from "axios";

const years = [];
const currentYear = new Date().getFullYear();

for (let i = currentYear; i >= 1950; i--) {
  years.push(i);
}

const FormPage = () => {
  const [raceInfo, setRaceInfo] = useState({});
  const [availableCircuits, setAvailableCircuits] = useState({});
  const [enteredLocation, setEnteredLocation] = useState("");
  const [enteredYear, setEnteredYear] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [noData, setNoData] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const yearChangeHandler = (event) => {
    setEnteredYear(event.target.value);
    axios
      .get(`${ERGAST_URL}/${event.target.value}/circuits.json`)
      .then((response) => {
        setAvailableCircuits(response.data);
      });
  };

  const locationChangeHandler = (event) => {
    setEnteredLocation(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setLoading(true);
    axios
      .get(
        `${ERGAST_URL}/${enteredYear}/circuits/${enteredLocation}/results.json`
      )
      .then((response) => {
        setRaceInfo(response.data);
        setLoading(false);
        response.data.MRData.RaceTable.Races.length > 0
          ? setNoData(false)
          : setNoData(true);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        console.log(err);
      });
  };

  return (
    <FormSection onSubmitForm={onSubmitHandler}>
      <div className="form-inputs">
        <div>
          <label htmlFor="year-select">Year</label>
          <select
            required
            id="year-select"
            defaultValue=""
            onChange={yearChangeHandler}
          >
            <option value="" disabled hidden>
              Select year...
            </option>
            {years.map((year, index) => (
              <option value={year} key={index}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="location-select">Gran Prix Location</label>
          <select
            required
            name="locations"
            id="location-select"
            defaultValue=""
            onChange={locationChangeHandler}
          >
            <option value="" disabled hidden>
              Select location...
            </option>
            {Object.keys(availableCircuits).length &&
              availableCircuits.MRData.CircuitTable.Circuits.map(
                (item, index) => (
                  <option value={item.circuitId} key={index}>
                    {item.circuitName}
                  </option>
                )
              )}
          </select>
        </div>
        <Button preset="primary" type="submit">
          Check Results
        </Button>
      </div>
      {error && <p>Sorry, there was an error, try again?</p>}
      {noData && <p>Sorry, there was no data, try again?</p>}
      {loading && (
        <div className="loading">
          <AiOutlineLoading />
        </div>
      )}
      {!noData && Object.keys(raceInfo).length > 0 && (
        <Table preset="other" info={raceInfo.MRData.RaceTable.Races} />
      )}
    </FormSection>
  );
};

export default FormPage;
