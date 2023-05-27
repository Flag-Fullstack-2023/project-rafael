import { Canvas } from "@react-three/fiber";
import React from "react";
import Section from "../organisms/section/section";
import SectionTitle from "../atoms/section-title/section-title";
import { SectionContent } from "./style/section-content.styled";
import SectionText from "../atoms/section-text/section-text";
import Showroom from "../molecules/showroom/showroom";

const CarSection = ({ preset, name, description }) => {
  console.log(name);
  return (
    <Section preset={preset}>
      <SectionTitle preset={preset}>{name}</SectionTitle>
      <SectionContent>
        <SectionText preset={preset}>{description}</SectionText>
        <Canvas shadows>
          <Showroom />
        </Canvas>
      </SectionContent>
    </Section>
  );
};

export default CarSection;
