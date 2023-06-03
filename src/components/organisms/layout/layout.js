import React from "react";
import { Outlet } from "react-router-dom";

import { Header, Footer } from "_organisms";

const Layout = () => {
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

export default Layout;
