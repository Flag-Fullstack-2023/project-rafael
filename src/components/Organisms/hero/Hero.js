import React from "react";
import { HeroEl } from "./Hero.styled";

const Hero = ({ children }) => {
  return <HeroEl>{children}</HeroEl>;
};

export default Hero;
