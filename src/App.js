import React from "react";
import { GlobalStyle } from "./styleReset";
import MainPage from "./Pages/MainPage";
import Header from "./Layout/Header/Header";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <MainPage />
    </React.Fragment>
  );
}

export default App;
