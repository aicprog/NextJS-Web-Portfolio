import React from 'react';

import { Section, SectionDivider, SectionTitle,} from '../../styles/GlobalComponents';
import  Carousel  from '../Carousel/Carousel';

const Projects = () => (
	<Section id="projects">
		<SectionDivider />
		<SectionTitle main center>
			Projects
		</SectionTitle>
		<Carousel />
	</Section>
);

export default Projects;

