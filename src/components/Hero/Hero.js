import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        nandini <br />
        neralagi
      </SectionTitle>
      <SectionText>
        first-year statistics & machine learning student @ carnegie mellon   
      </SectionText>
      <Button onClick={() => window.location = 'mailto: nandinineralagi@gmail.com'}> contact me </Button>
    </LeftSection>
    <img src="/images/n.jpg" alt ="" width="500" height="400"/>
  </Section>
);

export default Hero;