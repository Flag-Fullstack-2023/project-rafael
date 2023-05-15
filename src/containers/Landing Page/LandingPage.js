import React from "react";
import HeroImg from "../../components/Atoms/hero-image/HeroImg";
import { Quote } from "../../components/Molecules/quote/Quote";
import HeroOverlay from "../../components/Atoms/hero-overlay/HeroOverlay";
import Hero from "../../components/Organisms/hero/Hero";
import DoubleArrowDown from "../../components/Atoms/double-arrow-svg/DoubleArrowDown";

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
