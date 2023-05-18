import React from "react";
import { QuoteEl } from "./quote.styled";

export const Quote = () => {
  return (
    <QuoteEl>
      <q className="quote__text">
        When you no longer go for a gap, you're no longer a racing driver
      </q>
      <span className="quote__author">- Ayrton Senna, 1990</span>
    </QuoteEl>
  );
};
