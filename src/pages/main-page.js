import React, { useEffect, useState } from "react";
import axios from "axios";
import { Main } from "./main-page.styled";
import {
  HeroSection,
  CarSection,
  DriverSection,
} from "../components/sections/";
import { Title } from "../components/atoms/section-title/section-title-styled";
import { ChampionshipSection } from "../components/sections/championship-section-styled";
import { Table } from "../components/molecules";
import { TableWrapper } from "../components/molecules/table/table-styled";
import Toggle from "react-styled-toggle";
import { theme } from "../theme";
import Button from "../components/atoms/button/button";

const MainPage = () => {
  const [driverInfo, setDriverInfo] = useState({});
  const [carInfo, setCarInfo] = useState({});
  const [tableInfo, setTableInfo] = useState({});
  const [tableDriver, setTableDriver] = useState(false);
  let tableDriverName;

  tableDriver ? (tableDriverName = "senna") : (tableDriverName = "prost");

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
      .get(`${ERGAST_URL}/drivers/${tableDriverName}/results.json`)
      .then((response) => {
        setTableInfo(response.data.MRData.RaceTable.Races);
      });
  }, [tableDriver, tableDriverName]);

  const onChangeHandle = () => {
    setTableDriver((prevState) => !prevState);
  };

  return (
    <Main>
      <HeroSection />
      {carInfo.length && (
        <CarSection
          preset="dark"
          name={carInfo[1].name}
          description={carInfo[2].description}
          key={carInfo[0].id}
        />
      )}
      {driverInfo.length &&
        driverInfo.map((driver) => (
          <DriverSection
            name={driver.name}
            bio={driver.bio}
            images={driver.images}
            key={driver.id}
          />
        ))}
      {tableInfo.length && (
        <ChampionshipSection preset="light">
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
          <Button preset="primary">CHECK OTHER RESULTS</Button>
        </ChampionshipSection>
      )}
    </Main>
  );
};
export default MainPage;
