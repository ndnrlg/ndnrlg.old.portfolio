import { Section,  SectionText, SectionTitle } from '../../styles/GlobalComponents';

const Timeline = () => {
  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        I am an incoming sophomore at Carnegie Mellon expecting to graduate in 2024. I am based in the Bay Area and have strong interests in software engineering and machine learning. Currently, I am a Data Engineer intern at Optum, and in the past spring I was a part-time Software Engineer intern at Komodo, a CMU-based start-up. 
        I am really excited for some of my Fall 2022 courses including <a href="https://ckaestne.github.io/seai/">Machine Learning in Production</a> and <a href="http://www.cs.cmu.edu/~jianma/15351/index.html">Algorithms and Advanced Data Structures</a>. I am seeking Spring 2023 Co-Ops and Summer 2023 internships!
      </SectionText>
    </Section>
  );
};

export default Timeline;
