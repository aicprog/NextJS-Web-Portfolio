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

