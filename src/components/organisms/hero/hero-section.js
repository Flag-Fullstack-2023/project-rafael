import React from "react";
import { HashLink } from "react-router-hash-link";
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
        <HashLink smooth to="/#1">
          <MdKeyboardArrowDown />
        </HashLink>
      </HeroOverlay>
      <Quote />
    </Hero>
  );
};

export default HeroSection;
