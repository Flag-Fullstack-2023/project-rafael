import React from "react";
import { Canvas } from "@react-three/fiber";

import { SectionTitle, SectionText } from "_atoms";
import { Showroom } from "_molecules";
import { Section } from "_organisms";

// TODO
import { SectionContent, CarWrapper } from "../section-content.styled";

const CarSection = ({ preset, name, description, id }) => {
  return (
    <Section preset={preset} id={id}>
      <SectionTitle preset={preset}>{name}</SectionTitle>
      <SectionContent>
        <SectionText preset={preset}>{description}</SectionText>
        <CarWrapper>
          <Canvas shadows>
            <Showroom />
          </Canvas>
        </CarWrapper>
      </SectionContent>
    </Section>
  );
};

export default CarSection;
