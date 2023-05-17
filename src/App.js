import React from "react";
import { GlobalStyle } from "./utils/global";
import MainPage from "./Pages/MainPage";
import Header from "./components/Organisms/Header/Header";

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
