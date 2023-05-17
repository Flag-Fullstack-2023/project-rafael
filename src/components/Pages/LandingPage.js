import React from "react";
import HeroImg from "../Atoms/hero-image/HeroImg";
import { Quote } from "../Molecules/quote/Quote";
import HeroOverlay from "../Atoms/hero-overlay/HeroOverlay";
import Hero from "../Organisms/hero/Hero";
import DoubleArrowDown from "../Atoms/double-arrow-svg/DoubleArrowDown";

const LandingPage = () => {
  return (
    <Hero>
      <HeroImg />
      <HeroOverlay>
        <DoubleArrowDown />
      </HeroOverlay>
      <Quote />
    </Hero>
  );
};

export default LandingPage;
