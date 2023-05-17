import React from "react";
import styled from "styled-components";

const LandingPageEl = styled.section`
  height: 100vh;

  .hero__img {
    width: 100%;
  }
`;

const LandingPage = () => {
  return (
    <LandingPageEl>
      <img
        src={require("../../images/hero-img.jpg")}
        alt=""
        className="hero__img"
      />
    </LandingPageEl>
  );
};

export default LandingPage;
