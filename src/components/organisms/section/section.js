import React from "react";
import { SectionText, SectionTitle } from "_atoms";

import { SectionEl, SectionContent } from "./section.styled";

const PRESETS = ["text-first", "text-second", "column"];

const Section = (props) => {
  const { children, id, title, text } = props;

  let preset = props.preset;
  let variant = props.variant;

  if (!PRESETS.includes(preset)) {
    preset = "text-first";
    console.warn("NO PRESET", props);
  }

  if (!variant) {
    variant = "dark";
    console.warn("NO variant", props);
  }

  return (
    <SectionEl preset={preset} variant={variant} id={id}>
      <SectionTitle variant={variant}>{title}</SectionTitle>
      <SectionContent preset={preset}>
        {children}
        {preset !== "column" && (
          <SectionText variant={variant}>{text}</SectionText>
        )}
      </SectionContent>
    </SectionEl>
  );
};

export default Section;
