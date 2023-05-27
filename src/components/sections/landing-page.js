import React from "react";
import { Quote } from "../molecules/quote/quote";
import { Hero } from "./style/hero.styled";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HeroImg } from "./style/hero-img.styled";
import { HeroOverlay } from "./style/hero-overlay.styled";

const LandingPage = () => {
  return (
    <Hero>
      <HeroImg
        src={require("../../images/hero-img.jpg")}
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

export default LandingPage;
