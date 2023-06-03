import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Toggle from "react-styled-toggle";
import axios from "axios";

import { Button, SectionTitle } from "_atoms";
import { Table /* TableWrapper */ } from "_molecules";
import { HeroSection, CarSection, DriverSection } from "_sections";

import { theme } from "_theme/theme";

// TODO
import { ChampionshipSection } from "src/components/sections/championship/championship-section.styled";

export const ERGAST_URL = "http://ergast.com/api/f1";

const MainPage = () => {
  const [driverInfo, setDriverInfo] = useState({});
  const [carInfo, setCarInfo] = useState({});
  const [tableInfo, setTableInfo] = useState({});
  const [tableName, setTableName] = useState("prost");

  const API_URL = "https://6467aee160c8cb9a2c9a978a.mockapi.io/f1-flag";

  useEffect(() => {
    axios.get(`${API_URL}/drivers`).then((response) => {
      setDriverInfo(response.data);
    });
  }, [setDriverInfo]);

  useEffect(() => {
    axios.get(`${API_URL}/car`).then((response) => {
      setCarInfo(response.data);
    });
  }, [setCarInfo]);

  useEffect(() => {
    axios
      .get(`${ERGAST_URL}/1989/drivers/${tableName}/results.json`)
      .then((response) => {
        setTableInfo(response.data.MRData.RaceTable.Races);
      });
  }, [tableName]);

  const onChangeHandle = (e) => {
    setTableName((prevValue) => (prevValue === "senna" ? "prost" : "senna"));
  };

  return (
    <React.Fragment>
      <HeroSection />
      {carInfo.length && (
        <CarSection
          preset="dark"
          name={carInfo[1].name}
          description={carInfo[2].description}
          key={carInfo[0].id}
          id="CarSection"
        />
      )}
      {driverInfo.length &&
        driverInfo.map((driver) => (
          <DriverSection
            name={driver.name}
            bio={driver.bio}
            images={driver.images}
            key={driver.id}
            id={driver.name.split(" ").join("")}
          />
        ))}
      {tableInfo.length && (
        <ChampionshipSection preset="light" id="Championship">
          <SectionTitle preset="light">1989 Championship</SectionTitle>
          <Toggle
            backgroundColorUnchecked={theme.colors.darkGrey}
            backgroundColorChecked={theme.colors.darkGrey}
            labelLeft="Alain Prost"
            labelRight="Ayrton Senna"
            onChange={onChangeHandle}
          />
          <Table preset="ProstVsSenna" info={tableInfo} />
          <Link to="/other-results">
            <Button preset="primary">CHECK OTHER RESULTS</Button>
          </Link>
        </ChampionshipSection>
      )}
    </React.Fragment>
  );
};
export default MainPage;
