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

		const element = document.getElementById('main-section');
		const prevWidth = listRef.current.scrollLeft;


		if (listRef.current) {
			listRef.current.scrollBy({
				top: 0,
				left: scrollByValue,
				behavior: 'smooth',
			});
		}

		
		//every time you scroll right, you set a new scrollPosition
		setScrollPosition(listRef.current.scrollLeft);
		console.log("PREV", prevWidth, "SCROLL", scrollPosition);
		if (scrollPosition > prevWidth - scrollByValue) {
			listRef.current.scrollBy({
				top: 0,
				left: -scrollPosition - 500,
				behavior: 'smooth',
			});
		}
	};

	return (
		<Section>
			<div className="title"></div>
			<Left onClick={scrollLeft} />
			<div className="section-center" id="main-section" ref={listRef}>
				{projects.map((project) => {
					return (
						<article key={project.id}>
							<ProjectCard {...project} />
						</article>
					);
				})}
			</div>
			<Right onClick={scrollRight} />
		</Section>
	);
};

export default Carousel;

const Section = styled.section`
	width: 100%;
	margin: 5rem auto;
	position: relative;
	//overflow: hidden;

	@media screen and (max-width: 1250px) {
		width: 90%;
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
		padding: 1rem 4.5rem 1rem 4.5rem;
		//padding-left: 100rem;

		@media screen and (max-width: 1250px) {
			padding-left: 0rem;
			margin-right: 1rem;
		}
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
	top: 35%;
	//background: hsl(210, 22%, 49%);
	background: hsl(210, 22%, 49%);
	opacity: 0.5;
	color: #fff;
	place-items: center;
	border-color: transparent;
	font-size: 3rem;
	border-radius: 0.25rem;
	cursor: pointer;
	transition: all 0.3s linear;
	z-index: 100;
	left: 0;
	height: 40%;

	@media screen and (max-width: 1250px) {
		height: 30%;
	}

	@media screen and (max-width: 800px) {
		top: 40%;
		height: 15%;
	}

	:hover {
		background: hsl(21, 62%, 45%);
	}
`;

const Right = styled(AiOutlineRight)`
	position: absolute;
	top: 35%;
	//background: hsl(210, 22%, 49%);
	background: hsl(210, 22%, 49%);
	opacity: 0.5;
	color: #fff;
	place-items: center;
	border-color: transparent;
	font-size: 3rem;
	border-radius: 0.25rem;
	cursor: pointer;
	transition: all 0.3s linear;
	z-index: 100;
	right: 0px;
	height: 40%;

	@media screen and (max-width: 1250px) {
		height: 30%;
		right: -13px;
	}

	@media screen and (max-width: 800px) {
		height: 15%;
		top: 40%;
	}

	:hover {
		background: hsl(21, 62%, 45%);
		opacity: 1;
	}
`;
