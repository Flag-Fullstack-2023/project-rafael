import React from "react";
import { Title } from "./section-title.styled";

const SectionTitle = (props) => {
  const { children, variant } = props;
  return <Title variant={variant}>{children}</Title>;
};

export default SectionTitle;
