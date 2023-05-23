import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LandingPage from "../components/sections/landing-page.js";
import CarSection from "../components/sections/car-section";
import DriverSection from "../components/sections/driver-section.js";
import axios from "axios";

const Main = styled.main`
  margin: 0 auto;
  width: 100vw;
`;

const MainPage = () => {
  const [driverInfo, setDriverInfo] = useState({});
  const [carInfo, setCarInfo] = useState({});

  useEffect(() => {
    axios
      .get("https://6467aee160c8cb9a2c9a978a.mockapi.io/f1-flag/drivers")
      .then((response) => {
        setDriverInfo(response.data);
      });
  }, [setDriverInfo]);

  useEffect(() => {
    axios
      .get("https://6467aee160c8cb9a2c9a978a.mockapi.io/f1-flag/car")
      .then((response) => {
        setCarInfo(response.data);
      });
  }, [setCarInfo]);

  return (
    <Main>
      <LandingPage />
      {carInfo.length > 0 && (
        <CarSection
          preset="dark"
          name={carInfo[1].name}
          description={carInfo[2].description}
          key={carInfo[0].id}
        />
      )}
      {driverInfo.length > 0 &&
        driverInfo.map((driver) => (
          <DriverSection
            name={driver.name}
            bio={driver.bio}
            images={driver.images}
            key={driver.id}
          />
        ))}
    </Main>
  );
};
export default MainPage;
