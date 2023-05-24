import React, { useEffect, useState } from "react";
import axios from "axios";
import { Main } from "./style/main-page.styled";
import {
  LandingPage,
  CarSection,
  DriverSection,
} from "../components/sections/index.js";

const MainPage = () => {
  const [driverInfo, setDriverInfo] = useState({});
  const [carInfo, setCarInfo] = useState({});
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
