import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, Img } from './HeroStyles';


const Hero = () => (
  <>
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I'm Adriany. <br/>
      </SectionTitle>
      <SectionText>
      I am a Los Angeles based front-end web developer who cares deeply about user experience and utilizing new technologies. 
      </SectionText>
      
      <Button onClick={() => window.location='https://www.linkedin.com/in/acocom/'}>
        Learn More
      </Button>
      
    </LeftSection>
    
  </Section>

  </>
);

export default Hero;