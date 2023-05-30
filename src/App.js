import React from "react";
import { GlobalStyle } from "./utils/global";
import MainPage from "./pages/main-page";
import { Footer, Header } from "./components/organisms";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <MainPage />
      <Footer />
    </React.Fragment>
  );
}

export default App;
