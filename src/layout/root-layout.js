import React from "react";
import { Header, Footer } from "_organisms/";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default RootLayout;
