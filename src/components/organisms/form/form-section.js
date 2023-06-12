import React from "react";
import { Article } from "./form-section.styled";

const FormSection = ({ children, onSubmitForm }) => {
  return (
    <Article>
      <form onSubmit={onSubmitForm}>{children}</form>
    </Article>
  );
};

export default FormSection;
