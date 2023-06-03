import { SectionText, SectionTitle } from "_atoms/";
import { Gallery } from "_molecules/";
import { Section } from "_organisms/";

import { SectionContent } from "../section-content.styled";

const DriverSection = ({ name, bio, images, id }) => {
  let sectionPreset;

  switch (name) {
    case "Alain Prost":
      sectionPreset = "light";
      break;
    case "Ayrton Senna":
      sectionPreset = "dark";
      break;
    default:
      sectionPreset = "dark";
      break;
  }

  return (
    <Section preset={sectionPreset} id={id}>
      <SectionTitle preset={sectionPreset}>{name}</SectionTitle>
      <SectionContent preset={sectionPreset} name={name}>
        <Gallery images={images} name={name} />
        <SectionText preset={sectionPreset}>{bio}</SectionText>
      </SectionContent>
    </Section>
  );
};

export default DriverSection;
