import React from "react";
import { QuoteEl } from "./quote.styled";

export const Quote = (props) => {
  const {
    text = "When you no longer go for a gap, you're no longer a racing driver",
    person = "Ayrton Senna",
    year = 1990,
  } = props;

  return (
    <QuoteEl>
      <q className="quote__text">{text}</q>
      <span className="quote__author">
        - {person}, {year}
      </span>
    </QuoteEl>
  );
};
