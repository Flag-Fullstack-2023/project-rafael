import React from "react";
import { Title } from "./Section.Title.styled";

const SectionTitle = (props) => {
  const { children } = props;
  return <Title>{children}</Title>;
};

export default SectionTitle;
