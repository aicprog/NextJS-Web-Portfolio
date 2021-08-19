import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText, Icon, BoxDescription, Img} from './AcomplishmentsStyles';
import {FcGoogle} from 'react-icons/fc'
import certificate1 from '../../../public/images/certificate1.png'


const data = [
  { number: 20, text: 'Open Source Projects'},
  { number: 1000, text: 'Students', },
  { number: 1900, text: 'Github Followers', },
  { number: 5000, text: 'Github Stars', }
];

const Acomplishments = () => (
  <Section id="accomplishments">
  <SectionDivider/>
  <br/><br/>
  <SectionTitle>Certificates</SectionTitle>
  <Boxes>
    <Box>
      <BoxNum>
      <Icon><FcGoogle/></Icon>
      Google IT Support
      </BoxNum>
      <BoxDescription>
        
        <BoxText>
          Technical Support Fundamentals
        </BoxText>
        <a href="https://www.coursera.org/account/accomplishments/certificate/SZ8YLLU2FT9F"><Img src={certificate1}></Img></a>
      </BoxDescription>
    </Box>

    <Box>
      <BoxNum>
      <Icon><FcGoogle/></Icon>
      Google IT Support
      </BoxNum>
      <BoxDescription>
        <BoxText>
          The Bits and Bytes of Computer Networking
        </BoxText>
        <a href="https://www.coursera.org/account/accomplishments/certificate/GKBGTRUQXTXF"><Img src={certificate1}></Img></a>
      </BoxDescription>
    </Box>
  </Boxes>
  </Section>
);

export default Acomplishments;
