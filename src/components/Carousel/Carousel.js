import React, { useState, useEffect, useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import {projectsList} from "../../constants/constants";
import styled from "styled-components";

import ProjectCard from "../ProjectCard/ProjectCard";


let scrollByValue = 500;
const Carousel = () => {
	const [projects, setProjects] = useState(projectsList);
	const listRef = useRef(null)
	const [scrollPosition, setScrollPosition] = useState(0);

	//const [index, setIndex] = useState(0);
	//const [indexTwo, setIndexTwo] = useState(1)
	//const numOfSlidesSeen = 2
	const scrollLeft = (e) => {
	
		if (listRef.current.scrollLeft <= scrollByValue) {
			setScrollPosition(0);
		}
		if (listRef.current) {
			listRef.current.scrollBy({
				top: 0,
				left: -scrollByValue,
				behavior: 'smooth',
			});
		}

		
	}


	const scrollRight = () => {
		const width = listRef.current.getBoundingClientRect().width;
		console.log(listRef.current.scrollLeft, width);

		if (listRef.current.scrollLeft >= width) {
			scrollByValue = -listRef.current.offsetWidth - 500;
		}
		else{
			scrollByValue = 500;
		}
		
		//every time you scroll right, you set a new scrollPosition
		//setScrollPosition(listRef.current.scrollLeft);

		if (listRef.current) {
			listRef.current.scrollBy({
				top: 0,
				left: scrollByValue,
				behavior: 'smooth',
			});
		}

		//every time you scroll right, you set a new scrollPosition
		setScrollPosition(listRef.current.scrollLeft);
	};

	return (
		<Section >
			<div className="title"></div>
			<Left className="prev" onClick={scrollLeft} />
			<div className="section-center" ref={listRef}>
				{projects.map((project, projectIndex) => {
					return (
						<article key={project.id}>
							<ProjectCard {...project} />
						</article>
					);
				})}
			</div>
			<Right className="next" onClick={scrollRight} />
		</Section>
	);
};

export default Carousel;

const Section = styled.section`
	width: 100%;
	margin: 5rem auto;
	position: relative;
	//overflow: hidden;

	@media screen and (min-width: 992px) {
		.section {
			width: 80vw;
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
		//width: 90vw;
		height: 700px;
		//max-width: 1000px;
		text-align: center;
		display: flex;
		overflow: hidden;
		padding: 2rem;
		//padding-left: 100rem;
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

	/* .prev {
		opacity: 0;
		
		color: #fff;
		font-size: 2rem;
		transition: display 450ms;
		position: absolute;
		left: 0;
		z-index: 1;
		height: 80%;
		background: rgba(20, 20, 20, 0.5);
		border-radius: 5px;
	} */
	/* .prev,
	.next {
		position: absolute;
		top: 600px;
		transform: translateY(-50%);
		background: hsl(210, 22%, 49%);
		color: #fff;
		width: 2.25rem;
		height: 1.25rem;
		display: grid;
		place-items: center;
		border-color: transparent;
		font-size: 1rem;
		border-radius: 0.25rem;
		cursor: pointer;
		transition: all 0.3s linear;
	} */
	.prev:hover,
	.next:hover {
		background: hsl(21, 62%, 45%);
	}
	.prev {
		left: 0px;
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
		display: flex;
		justify-items: center;
		padding-left: 2.5rem;
		padding-right: 2.5rem;
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


const Left = styled(AiOutlineLeft)`
	position: absolute;
	top: 50%;
	background: hsl(210, 22%, 49%);
	color: #fff;
	place-items: center;
	border-color: transparent;
	font-size: 1rem;
	border-radius: 0.25rem;
	cursor: pointer;
	transition: all 0.3s linear;
	z-index: 100;
`;

const Right = styled(AiOutlineRight)`
	position: absolute;
	top: 50%;
	background: hsl(210, 22%, 49%);
	color: #fff;
	place-items: center;
	border-color: transparent;
	font-size: 1rem;
	border-radius: 0.25rem;
	cursor: pointer;
	transition: all 0.3s linear;
	z-index: 100;
`;
