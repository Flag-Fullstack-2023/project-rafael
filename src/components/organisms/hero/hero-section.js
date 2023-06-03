import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

import { Quote } from "_molecules";

import { Hero, HeroImg, HeroOverlay } from "./hero-section.styled";

const HeroSection = () => {
  return (
    <Hero>
      <HeroImg
        src={require("../../../assets/hero-img.jpg")}
        alt=""
        className="hero__img"
      />
      <HeroOverlay>
        <MdKeyboardArrowDown />
      </HeroOverlay>
      <Quote />
    </Hero>
  );
};

export default HeroSection;
