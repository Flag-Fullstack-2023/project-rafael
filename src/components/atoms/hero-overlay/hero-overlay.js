import React from "react";
import { Overlay } from "./hero-overlay.styled";

const HeroOverlay = ({ children }) => {
  return <Overlay>{children}</Overlay>;
};

export default HeroOverlay;
