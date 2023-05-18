import React from "react";
import Section from "../organisms/section/section";
import SectionTitle from "../atoms/section-title/section-title";
import SectionContent from "../molecules/section-content/section-content";
import SectionText from "../atoms/section-text/section-text";
import SectionMedia from "../atoms/section-media/section-media";

const ProstSection = (props) => {
  const { preset } = props;
  const sectionPreset = preset;
  return (
    <Section preset={sectionPreset}>
      <SectionTitle preset={sectionPreset}>Alain Prost</SectionTitle>
      <SectionContent preset={sectionPreset}>
        <SectionMedia></SectionMedia>
        <SectionText preset={sectionPreset}>
          The McLaren MP4/5 was a highly successful Formula One racing car
          designed by the McLaren Formula One team based in Woking, England, and
          powered by Honda's naturally-aspirated RA109E. The chassis design was
          led by Neil Oatley, teaming up with Steve Nichols, Pete Weismann, Tim
          Wright, Bob Bell and Mike Gascoyne. As with the previous designs,
          Gordon Murray, as Technical Director, had the role of liaising between
          the drawing office and production. Osamu Goto was the Honda F1 team
          chief designer for the car's engine. Loosely based on its 1988
          predecessor, the MP4/5 took 16 wins, 36 podiums, 27 pole positions,
          and 263 points before it was replaced by the MP4/6 for 1991. 1989 was
          the first year where naturally aspirated engines were compulsory for
          all teams after the banning of the turbocharged units at the end of
          the previous season. To this end, Honda built a 3.5-litre V10 engine,
          developed throughout most of the latter half of 1987 and through 1988.
          The MP4/5 was unveiled for pre-season testing and it was instantly on
          the pace, as well as reliable. Developed by Neil Oatley, the MP4/5
          looked like the car to beat in the new season.
        </SectionText>
      </SectionContent>
    </Section>
  );
};

export default ProstSection;
