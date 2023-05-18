import React from "react";
import { HeroImgEl } from "./hero-img.styled";

export const HeroImg = () => {
  return (
    <HeroImgEl
      src={require("../../../images/hero-img.jpg")}
      alt=""
      className="hero__img"
    />
  );
};

export default HeroImg;
