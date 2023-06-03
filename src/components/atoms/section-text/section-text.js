import React from "react";
import { TextWrapper } from "./section-text.styled";

const SectionText = (props) => {
  const { children, variant } = props;
  return <TextWrapper variant={variant}>{children}</TextWrapper>;
};

export default SectionText;
