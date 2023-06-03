import React, { useEffect, useState } from "react";
import Toggle from "react-styled-toggle";
import axios from "axios";

import { Button } from "_atoms/";

import { Table } from "_molecules/";
import { TableWrapper } from "_molecules/table/table.styled";

import { HeroSection, CarSection, DriverSection } from "_sections/";
import { Title } from "_atoms/section-title/section-title-styled";
import { ChampionshipSection } from "_sections/championship/championship-section.styled";

import { theme } from "../../theme";
import { Link } from "react-router-dom";

const MainPage = () => {
  const [driverInfo, setDriverInfo] = useState({});
  const [carInfo, setCarInfo] = useState({});
  const [tableInfo, setTableInfo] = useState({});

  const [tableName, setTableName] = useState("prost");

  const API_URL = "https://6467aee160c8cb9a2c9a978a.mockapi.io/f1-flag";
  const ERGAST_URL = "http://ergast.com/api/f1/1989";

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
      .get(`${ERGAST_URL}/drivers/${tableName}/results.json`)
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
          <Title preset="light">1989 Championship</Title>
          <Toggle
            backgroundColorUnchecked={theme.colors.darkGrey}
            backgroundColorChecked={theme.colors.darkGrey}
            labelLeft="Alain Prost"
            labelRight="Ayrton Senna"
            onChange={onChangeHandle}
          />
          <TableWrapper>
            <Table info={tableInfo} />
          </TableWrapper>
          <Link to="/other-results">
            <Button preset="primary">CHECK OTHER RESULTS</Button>
          </Link>
        </ChampionshipSection>
      )}
    </React.Fragment>
  );
};
export default MainPage;
