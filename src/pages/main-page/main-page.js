import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Link } from "react-router-dom";
import Toggle from "react-styled-toggle";
import axios from "axios";

import { Button } from "_atoms";
import { Gallery, Showroom, Table } from "_molecules";
import { Section, Hero } from "_organisms";

import { theme } from "_theme/theme";

import { CarWrapper, TableWrapper } from "./main-page.styles";

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
      <Hero />
      {carInfo.length && (
        <Section
          variant="dark"
          preset="text-first"
          id={carInfo[0].id}
          title={carInfo[1].name}
          text={carInfo[2].description}
        >
          <CarWrapper>
            <Canvas shadows>
              <Showroom />
            </Canvas>
          </CarWrapper>
        </Section>
      )}
      {driverInfo.length &&
        driverInfo.map((driver, index) => {
          const { images, name, bio } = driver;

          const options = {};

          switch (name) {
            case "Alain Prost":
              options.variant = "light";
              options.preset = "text-second";
              break;
            default:
              options.variant = "dark";
              options.preset = "text-first";
              break;
          }

          return (
            <Section {...options} id={name} title={name} text={bio} key={index}>
              <Gallery images={images} name={name} />
            </Section>
          );
        })}
      {tableInfo.length && (
        <Section
          variant="light"
          preset="column"
          id="Championship"
          title="1989 Championship"
        >
          <Toggle
            backgroundColorUnchecked={theme.colors.darkGrey}
            backgroundColorChecked={theme.colors.darkGrey}
            labelLeft="Alain Prost"
            labelRight="Ayrton Senna"
            onChange={onChangeHandle}
          />
          <TableWrapper>
            <Table preset="ProstVsSenna" info={tableInfo} />
          </TableWrapper>
          <Link to="/other-results">
            <Button preset="primary">CHECK OTHER RESULTS</Button>
          </Link>
        </Section>
      )}
    </React.Fragment>
  );
};
export default MainPage;
