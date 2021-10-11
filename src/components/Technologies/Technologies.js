import React from 'react';
import { DiFirebase, DiReact, DiZend, 
  DiHtml5, DiCss3, DiPython } from 'react-icons/di';
import {IoLogoJavascript} from 'react-icons/io'
import { SiRedux } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { CgStyle } from "react-icons/cg";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle,
SkillsContainer, SkillsList, Skill, Icon } from './TechnologiesStyles';

const Technologies = () => (
	<Section id="skills">
		<SectionDivider />
		<br />
		<br />
		<SectionTitle>Skills</SectionTitle>
		{/* <SectionText>
        I've worked with a range of technologies in the web development world. 
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Front End</ListTitle>
          <ListParagraph>React.js, Gatsby, NextJS</ListParagraph>
        </ListContainer>
      </ListItem>
    </List> */}
		<SkillsContainer>
			<SkillsList>
				<Skill>
					<Icon>
						<DiHtml5 size="2rem" />
					</Icon>
					HTML5
				</Skill>
				<Skill>
					<Icon>
						<DiCss3 size="2rem" />
					</Icon>
					CSS3
				</Skill>
				<Skill>
					<Icon>
						<IoLogoJavascript size="2rem" />
					</Icon>
					Javascript
				</Skill>
				<Skill>
					<Icon>
						<DiReact size="2rem" />
					</Icon>
					React
				</Skill>
				<Skill>
					<Icon>
						<SiRedux size="2rem" />
					</Icon>
					Redux
				</Skill>
				<Skill>
					<Icon>
						<BsBootstrap size="2rem" />
					</Icon>
					BootStrap
				</Skill>
				<Skill>
					<Icon>
						<CgStyle size="2rem" />
					</Icon>
					Styled Components
				</Skill>
				<Skill>
					<Icon>
						<DiPython size="2rem" />
					</Icon>
					Python
				</Skill>
			</SkillsList>
		</SkillsContainer>
	</Section>
);

export default Technologies;
