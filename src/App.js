import React from "react";
import { GlobalStyle } from "./styleReset";
import Button from "./components/Button/Button";
import MainPage from "./Pages/MainPage";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <MainPage />
    </React.Fragment>
  );
}

export default App;
