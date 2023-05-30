import React from "react";
import Quote from "../../molecules/quote/quote";
import { Hero, HeroImg, HeroOverlay } from "./hero-section.styled";
import { MdKeyboardArrowDown } from "react-icons/md";

const HeroSection = () => {
  return (
    <Hero>
      <HeroImg
        src={require("../../../images/hero-img.jpg")}
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
