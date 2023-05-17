import { Canvas } from "@react-three/fiber";
import React from "react";
import styled from "styled-components";
import Showroom from "../../components/molecules/_showroom/_showroom";
import SectionTitle from "../../components/atoms/section-title/section-title";
import SectionContent from "../../components/organisms/section/section";

const Section = styled.section`
  background-color: ${(props) => props.theme.darkGrey};
  height: 100vh;
  color: ${(props) => props.theme.white};
  margin: 10rem auto;

  .section__media {
    max-height: 500px;
    aspect-ratio: 3/2;
  }
`;

const SectionEl = () => {
  return (
    <Section>
      <SectionTitle>The Car</SectionTitle>
      <SectionContent>
        <p className="section__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
          veritatis fugiat earum eveniet voluptates sed beatae nulla dignissimos
          officiis ipsum eum laborum sit illo ratione? Ipsam dolores,
          perspiciatis rem soluta cupiditate, beatae possimus ratione aliquid
          tempora consequuntur fugiat odit error.
        </p>
        <div className="section__media">
          <Canvas shadows>
            <Showroom />
          </Canvas>
        </div>
      </SectionContent>
    </Section>
  );
};

export default SectionEl;
