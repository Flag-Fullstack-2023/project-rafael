import React from "react";
import { SectionEl } from "./section.styled";

const SectionContent = (props) => {
  const { children } = props;
  return <SectionEl>{children}</SectionEl>;
};

export default SectionContent;
