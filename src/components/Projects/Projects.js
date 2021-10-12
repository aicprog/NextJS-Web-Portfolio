import React from 'react';

import { Section, SectionDivider, SectionTitle,} from '../../styles/GlobalComponents';
import  Carousel  from '../Carousel/Carousel';

const Projects = () => (
	<Section nopadding id="projects">
		<SectionDivider />
		<SectionTitle main>Projects</SectionTitle>
		<Carousel />
	</Section>
);

export default Projects;



		// <GridContainer>
		// 	{projectsList.map(
		// 		({ id, image, title, description, tags, source, visit }) => (
		// 			<BlogCard key={id}>
		// 				<a href={visit}>
		// 					<Img src={image} />
		// 				</a>
		// 				<TitleContent>
		// 					<HeaderThree>{title}</HeaderThree>
		// 					<Hr />

		// 					<CardInfo>{description}</CardInfo>
		// 				</TitleContent>
		// 				{/* <TitleContent>Stack</TitleContent> */}

		// 				<CardBottom>
		// 					<Break /> <br />
		// 					<TagList>
		// 						{tags.map((tag, i) => (
		// 							<Tag key={i}>&nbsp;{tag}&nbsp; </Tag>
		// 						))}
		// 					</TagList>
		// 					<UtilityList>
		// 						<ExternalLinks href={visit}>Site</ExternalLinks>
		// 						<ExternalLinks href={source}>Code</ExternalLinks>
		// 					</UtilityList>
		// 				</CardBottom>
		// 			</BlogCard>
		// 		)
		// 	)}
		// </GridContainer>;