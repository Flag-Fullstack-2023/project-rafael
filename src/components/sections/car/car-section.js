import { Canvas } from "@react-three/fiber";
import React from "react";
import { SectionTitle, SectionText } from "_atoms/";
import { Showroom } from "_molecules/";
import { Section } from "_organisms/";
import { SectionContent, CarWrapper } from "../section-content.styled";

const CarSection = ({ preset, name, description }) => {
  return (
    <Section preset={preset}>
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
