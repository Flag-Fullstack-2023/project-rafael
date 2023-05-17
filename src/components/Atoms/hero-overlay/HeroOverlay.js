import React from "react";
import { Overlay } from "./HeroOverlay.styled";

const HeroOverlay = ({ children }) => {
  return <Overlay>{children}</Overlay>;
};

export default HeroOverlay;
