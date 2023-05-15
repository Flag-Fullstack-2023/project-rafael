import React from "react";
import { GlobalStyle } from "./styleReset";
import MainPage from "./Pages/MainPage";
import Header from "./Layout/Header/Header";
import LandingPage from "./Layout/Landing/LandingPage";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <LandingPage />
      <MainPage />
    </React.Fragment>
  );
}

export default App;
