import React from "react";
import { MediaContainer } from "./section-media.styled";

const SectionMedia = (props) => {
  const { children } = props;
  return <MediaContainer>{children}</MediaContainer>;
};

export default SectionMedia;
