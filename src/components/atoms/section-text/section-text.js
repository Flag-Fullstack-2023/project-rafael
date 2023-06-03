import React from "react";
import { TextWrapper } from "./section-text.styled";

const SectionText = (props) => {
  const { children, preset } = props;
  return <TextWrapper preset={preset}>{children}</TextWrapper>;
};

export default SectionText;
