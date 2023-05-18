import React from "react";
import { GlobalStyle } from "./utils/global";
import MainPage from "./pages/MainPage";
import Header from "./components/organisms/header/header";

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
