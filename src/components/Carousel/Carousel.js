import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import {projectsList} from "../../constants/constants";
import styled from "styled-components";


import {
	BlogCard,
	CardInfo,
	ExternalLinks,
	GridContainer,
	HeaderThree,
	Hr,
	Tag,
	TagList,
	TitleContent,
	UtilityList,
	Img,
	CardBottom,
	Break,
} from "../Projects/ProjectsStyles";
import ProjectCard from "../ProjectCard/ProjectCard";
import next from "next";

const Carousel = () => {
	const [projects, setProjects] = useState(projectsList);
	const [index, setIndex] = useState(0);
	const [indexTwo, setIndexTwo] = useState(1)
	const numOfSlidesSeen = 2

    useEffect(() => {
			const lastIndex = projects.length - 1;
			if (index < 0) {
				
				setIndexTwo(lastIndex)
				setIndex(lastIndex - 1);
				//setIndexTwo(lastIndex - 1)
			}
			if (index > lastIndex) {
				setIndex(0);
				setIndexTwo(1)
			}
		}, [index, projects]);

	const prev = () =>{
		//Allows loop back in case you reach a case where you are at the end of the carousel and you click previous again, you won't get stuck at the last two indexes
		if (index - (numOfSlidesSeen + 1) < 0 && index !== 0) {
			console.log("PEV", index, indexTwo);
			setIndex(0);
			setIndexTwo(1);
		} else {
			setIndexTwo(index - numOfSlidesSeen);
			setIndex(index - (numOfSlidesSeen + 1));
		}


	}

	const next = () =>{
		setIndex(index + numOfSlidesSeen);
		setIndexTwo(index + (numOfSlidesSeen + 1));
	}



		useEffect(() => {
			let slider = setInterval(() => {
				setIndex(index + 2);
				setIndexTwo(index + 3);
			}, 5000);
			return () => {
				clearInterval(slider);
			};
		}, [index]);

	return (
		<Section>
			<div className="title">
			</div>
			<div className="section-center">
				{projects.map((project, projectIndex) => {

					let position = "nextSlide";


					if (projectIndex === index) {
						position = "activeSlide";

					}
					if (
						projectIndex === projectIndex - 1 ||
						(index === 0 && projectIndex === projects.length - 1)
					) {
						position = "lastSlide";
					}

					const nextProject = projects[indexTwo];


				return (
						<article className={position} key={project.id}>
						<ProjectCard {...project} />
						{index < projects.length - 1 && index >= 0 ? (
							<ProjectCard {...nextProject} />
							) : null}
							</article>
				);})}
				<button className="prev" onClick={prev}>
					<FiChevronLeft />
				</button>
				<button className="next" onClick={next}>
					<FiChevronRight />
				</button>
			</div>
		</Section>
	);
};

export default Carousel;

const Section = styled.section`
	width: 100%;
	margin: 5rem auto;

	@media screen and (min-width: 992px) {
		.section {
			width: 95vw;
		}
	}

	.title {
		text-align: center;
		margin-bottom: 2rem;
	}
	.title h2 {
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 500;
	}
	.title span {
		font-size: 0.85em;
		color: hsl(21, 62%, 45%);
		margin-right: 1rem;
		font-weight: 700;
	}
	.section-center {
		margin: 0 auto;
		margin-top: 4rem;
		width: 90vw;
		height: 700px;
		max-width: 1000px;
		text-align: center;
		position: relative;
		display: flex;
		overflow: hidden;
		justify-content: center;
	}
	.project-img {
		border-radius: 50%;
		margin-bottom: 1rem;
		width: 150px;
		height: 150px;
		object-fit: cover;
		border: 4px solid hsl(210, 31%, 80%);
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
	}
	article h4 {
		text-transform: uppercase;
		color: hsl(21, 62%, 45%);
		margin-bottom: 0.25rem;
	}
	.title {
		text-transform: capitalize;
		margin-bottom: 0.75rem;
		color: hsl(209, 34%, 30%);
	}
	.text {
		max-width: 35em;
		margin: 0 auto;
		margin-top: 2rem;
		line-height: 2;
		color: hsl(210, 22%, 49%);
	}
	.icon {
		font-size: 3rem;
		margin-top: 1rem;
		color: hsl(21, 62%, 45%);
	}
	.prev,
	.next {
		position: absolute;
		top: 200px;
		transform: translateY(-50%);
		background: hsl(210, 22%, 49%);
		color: #fff;
		width: 1.25rem;
		height: 1.25rem;
		display: grid;
		place-items: center;
		border-color: transparent;
		font-size: 1rem;
		border-radius: 0.25rem;
		cursor: pointer;
		transition: all 0.3s linear;
	}
	.prev:hover,
	.next:hover {
		background: hsl(21, 62%, 45%);
	}
	.prev {
		left: 0;
	}
	.next {
		right: 0;
	}
	@media (min-width: 800px) {
		.text {
			max-width: 45em;
		}
		.prev,
		.next {
			width: 2rem;
			height: 2rem;
			font-size: 1.5rem;
		}
	}
	article {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
		transition: all 0.3s linear;
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 2rem;
		justify-items: center;
	}
	article.activeSlide {
		opacity: 1;
		transform: translateX(0);
	}
	article.lastSlide {
		transform: translateX(-100%);
	}
	article.nextSlide {
		transform: translateX(100%);
	}
`;



