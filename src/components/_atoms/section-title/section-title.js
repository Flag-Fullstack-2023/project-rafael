import React from "react";
import { Title } from "./section-title.styled";

const SectionTitle = (props) => {
  const { children, preset } = props;
  return <Title preset={preset}>{children}</Title>;
};

export default SectionTitle;
