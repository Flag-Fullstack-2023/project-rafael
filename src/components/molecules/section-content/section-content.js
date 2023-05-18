import React from "react";
import { ArticleEl } from "./section-content.styled";

const SectionContent = (props) => {
  const { children } = props;
  return <ArticleEl>{children}</ArticleEl>;
};

export default SectionContent;
