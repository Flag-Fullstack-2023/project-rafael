import React from "react";
import HeroImg from "../atoms/hero-image/hero-img";
import { Quote } from "../molecules/quote/quote";
import HeroOverlay from "../atoms/hero-overlay/hero-overlay";
import Hero from "../organisms/hero/hero";
import DoubleArrowDown from "../atoms/double-arrow-svg/double-arrow-down";

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
