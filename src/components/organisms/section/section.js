import React from "react";
import { SectionEl } from "./section.styled";

const Section = (props) => {
  const { children, preset } = props;
  return <SectionEl preset={preset}>{children}</SectionEl>;
};

export default Section;
