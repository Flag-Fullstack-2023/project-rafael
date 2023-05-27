import { Canvas } from "@react-three/fiber";
import React from "react";
import Section from "../organisms/section/section";
import SectionTitle from "../atoms/section-title/section-title";
import { SectionContent, CarWrapper } from "./section-content.styled";
import SectionText from "../atoms/section-text/section-text";
import Showroom from "../molecules/showroom/showroom";

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
