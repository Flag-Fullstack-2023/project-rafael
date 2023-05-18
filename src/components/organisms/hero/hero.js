import React from "react";
import { HeroEl } from "./hero.styled";

const Hero = ({ children }) => {
  return <HeroEl>{children}</HeroEl>;
};

export default Hero;
