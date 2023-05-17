import React from "react";
import { GlobalStyle } from "./utils/global";
import MainPage from "./pages/MainPage";
import Header from "./components/organisms/_header/_header";

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
