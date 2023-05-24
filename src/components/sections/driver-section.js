import Section from "../organisms/section/section";
import SectionTitle from "../atoms/section-title/section-title";
import { SectionContent } from "./style/section-content.styled";
import SectionText from "../atoms/section-text/section-text";
import Gallery from "../molecules/gallery/gallery";

const DriverSection = ({ name, bio, images }) => {
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
    <Section preset={sectionPreset}>
      <SectionTitle preset={sectionPreset}>{name}</SectionTitle>
      <SectionContent preset={sectionPreset}>
        <Gallery images={images} name={name} />
        <SectionText preset={sectionPreset}>{bio}</SectionText>
      </SectionContent>
    </Section>
  );
};

export default DriverSection;
