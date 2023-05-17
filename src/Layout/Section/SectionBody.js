import { Canvas } from "@react-three/fiber";
import React from "react";
import styled from "styled-components";
import Showroom from "../../components/Molecules/showroom/Showroom";
import SectionTitle from "../../components/Atoms/hero-title/SectionTitle";
import SectionContent from "../../components/Organisms/section/section";

const Section = styled.section`
  background-color: ${(props) => props.theme.darkGrey};
  height: 100vh;
  color: ${(props) => props.theme.white};
  margin: 10rem auto;

  .section__article {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 6rem;
  }

  .section__media {
    max-height: 500px;
    aspect-ratio: 3/2;
  }
`;

const SectionEl = () => {
  return (
    <Section>
      <SectionTitle>The Car</SectionTitle>
      <SectionContent className="section__article">
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
