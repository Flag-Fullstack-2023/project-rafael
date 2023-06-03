import React, { useEffect, useState } from "react";
import axios from "axios";
import { ERGAST_URL } from "../main-page/main-page";
// import { FormSection } from "_components/sections";
import { Button } from "_atoms";

import { FormWrapper } from "_sections/form-section-styled.js";

import Table from "_components/molecules/table/table";
// import { Table } from "_components/molecules";

const FormPage = () => {
  const [raceInfo, setRaceInfo] = useState({});
  const [enteredLocation, setEnteredLocation] = useState("");
  const [enteredYear, setEnteredYear] = useState("");

  const locationChangeHandler = (event) => {
    setEnteredLocation(event.target.value);
    console.log(enteredLocation);
  };

  const yearChangeHandler = (event) => {
    console.log(event.target.value);
  };

  // useEffect(() => {
  //   axios.get(`${ERGAST_URL}/${year}/circuits/${circuitId}/results.json`).then((response) => {
  //     setRaceInfo(response.data);
  //   });
  // }, [enteredYear, enteredLocation]);

  return (
    <FormWrapper>
      <article>
        <form onSubmit={(event) => event.preventDefault}>
          <div className="form-inputs">
            <div>
              <label>Gran Prix Location</label>
              <input
                type="text"
                placeholder="Portugal"
                onChange={locationChangeHandler}
              />
            </div>
            <div>
              <label>Year</label>
              <input
                type="number"
                min="1950"
                step="1"
                placeholder="1993"
                onChange={yearChangeHandler}
              />
            </div>
            <Button preset="primary" type="submit">
              Check Results
            </Button>
          </div>
        </form>
        {raceInfo.length && <Table />}
      </article>
    </FormWrapper>
  );
};

export default FormPage;
