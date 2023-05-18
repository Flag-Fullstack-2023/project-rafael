import React from "react";
import { TextEl } from "./section-text.styled";

const SectionText = (props) => {
  const { children, preset } = props;
  return <TextEl preset={preset}>{children}</TextEl>;
};

export default SectionText;
