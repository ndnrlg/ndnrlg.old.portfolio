import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, RightSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Nandini <br />
        Neralagi
      </SectionTitle>
      <SectionText>
        Second-year Statistics + Machine Learning @ Carnegie Mellon   
      </SectionText>
    </LeftSection>
    <RightSection>
    <img src="/images/n.jpg" />
    </RightSection>
  </Section>
);

export default Hero;