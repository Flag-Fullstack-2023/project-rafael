import React from "react";
import { SectionEl } from "./section.styled";

const Section = (props) => {
  const { children, preset, id } = props;
  return (
    <SectionEl preset={preset} id={id}>
      {children}
    </SectionEl>
  );
};

export default Section;
