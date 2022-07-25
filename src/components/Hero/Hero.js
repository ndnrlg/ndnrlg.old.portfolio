import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection, GridContainer, ProfileImage} from './HeroStyles';
const imageStyles = { maxwidth: '20%', maxheight: '20%'};

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Nandini <br />
        Neralagi
      </SectionTitle>
      <SectionText>
        Statistics + Machine Learning @ Carnegie Mellon   
      </SectionText>
    </LeftSection>
    <img
        styles={imageStyles}
        src="https://media-exp1.licdn.com/dms/image/C5603AQGrBOI_9wHZMw/profile-displayphoto-shrink_800_800/0/1654125972975?e=1664409600&v=beta&t=rYfYINSi6SUBmyiw-upaV2IqRhxGeEgL11UwqY-JjjY"
      />
  </Section>
);

export default Hero;