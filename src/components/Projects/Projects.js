import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img,
CardBottom} from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle,} from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider/>
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({id, image, title, description, tags, source, visit}) => (
        <BlogCard key={id}>
          <a href={visit}><Img src={image}/></a>
          <TitleContent>
          <HeaderThree>{title}</HeaderThree>
            <Hr/>
            
            <CardInfo>{description}</CardInfo>
          </TitleContent>
          {/* <TitleContent>Stack</TitleContent> */}

          <CardBottom>
            
            <TagList>
              [{tags.map((tag, i) =>(
                <Tag key={i}>{tag}</Tag>
              ))}]
            </TagList>
            <UtilityList>
              <ExternalLinks href={visit}>Site</ExternalLinks>
              <ExternalLinks href={source}>Code</ExternalLinks>
            </UtilityList>
          </CardBottom>
        </BlogCard>
      ))}
    </GridContainer>

  </Section>  
);

export default Projects;