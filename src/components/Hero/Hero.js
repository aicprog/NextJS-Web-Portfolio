import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, Img } from './HeroStyles';
// import profileImg from '../../../public/images/profile_img.png'
import profileImg from '../../../public/images/profile2.png'

const Hero = () => (
  <>
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I'm Adriany. <br/>
        <Img src={profileImg}></Img>
      </SectionTitle>
      <SectionText>
      I am a Los Angeles based front-end web developer who cares deeply about user experience and new technologies. 
      </SectionText>
      
      <Button onClick={() => window.location='https://google.com'}>
        Learn More
      </Button>
      
    </LeftSection>
    
  </Section>

  </>
);

export default Hero;