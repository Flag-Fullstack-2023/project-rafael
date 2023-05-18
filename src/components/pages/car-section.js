import { Canvas } from "@react-three/fiber";
import React from "react";
import Section from "../organisms/section/section";
import SectionTitle from "../atoms/section-title/section-title";
import SectionContent from "../molecules/section-content/section-content";
import SectionText from "../atoms/section-text/section-text";
import SectionMedia from "../atoms/section-media/section-media";
import Showroom from "../molecules/showroom/showroom";

const CarSection = (props) => {
  const { preset } = props;
  const sectionPreset = preset;

  return (
    <Section preset={sectionPreset}>
      <SectionTitle preset={sectionPreset}>The Car</SectionTitle>
      <SectionContent>
        <SectionText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
          veritatis fugiat earum eveniet voluptates sed beatae nulla dignissimos
          officiis ipsum eum laborum sit illo ratione? Ipsam dolores,
          perspiciatis rem soluta cupiditate, beatae possimus ratione aliquid
          tempora consequuntur fugiat odit error.
        </SectionText>
        <SectionMedia>
          <Canvas shadows>
            <Showroom />
          </Canvas>
        </SectionMedia>
      </SectionContent>
    </Section>
  );
};

export default CarSection;
