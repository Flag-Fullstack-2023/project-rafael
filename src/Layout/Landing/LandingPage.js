import React from "react";
import styled from "styled-components";

const LandingPageEl = styled.section`
  height: 100vh;
  position: relative;

  .hero__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(80%);
  }

  .img__overlay {
    background: rgb(57, 66, 61);
    background: linear-gradient(
      180deg,
      rgba(57, 66, 61, 0) 0%,
      rgba(20, 20, 20, 1) 95%
    );
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
  }

  .quote {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    position: absolute;
    color: white;
    top: 20%;
    left: 5%;

    &__text {
      font-size: 7rem;
      letter-spacing: 0.1rem;
      line-height: 8rem;
      font-weight: 600;
    }
    &__author {
      position: absolute;
      bottom: -5%;
      right: 55%;
    }
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
      <div className="img__overlay"></div>
      <div className="quote">
        <q className="quote__text">
          When you longer go for a gap, you're no longer a racing driver
        </q>
        <p className="quote__author">- Ayrton Senna, 1990</p>
      </div>
    </LandingPageEl>
  );
};

export default LandingPage;
