import { Canvas } from "@react-three/fiber";
import React from "react";
import { SectionTitle, SectionText } from "_components/atoms";
import { Showroom } from "_components/molecules";
import { Section } from "_components/organisms";
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
