import currencyWebsite from '../../public/images/p1.png';
import travelWebsite from '../../public/images/p2.png';
import comfortDepo from '../../public/images/comfort-depo.png';
import astraClothing from '../../public/images/astra-clothing.png';

export const projects = [
	{
		title: "Comfort Depo",
		description:
			"Using React, Styled Components, Sass, and Stripe for a responsive and mobile-friendly e-commerce home improvement website.",
		image: comfortDepo,
		tags: [
			"React",
			"Sass",
			"Stripe",
			"Firebase",
			"Smooth Scroll",
			"Styled-Components",
		],
		source: "https://github.com/aicprog/React-Ecommerce-Comfort-Depo",
		visit: "https://comfort-depo.netlify.app/",
		id: 0,
	},
	{
		title: "Astra Clothing",
		description:
			"Using React, Redux, Sass, and Stripe for a e-commerce clothing website that is responsive and mobile-friendly. ",
		image: astraClothing,
		tags: ["Gatsby", "Styled Components", "GraphQL"],
		source: "https://github.com/aicprog/React-Ecommerce-Astra-Clothing",
		visit: "https://astra-clothing.netlify.app/",
		id: 1,
	},
	{
		title: "Currency Website",
		description:
			"Using React, Styled Components, and Smooth Scroll for a responsive and mobile-friendly credit card website.",
		image: currencyWebsite,
		tags: ["React", "Styled Components", "Smooth Scroll"],
		source: "https://github.com/aicprog/React-Currency-Website/tree/website",
		visit: "https://aicprog.github.io/React-Currency-Website/",
		id: 0,
	},
	{
		title: "Travel Website",
		description:
			"Using Gatsby, React and GraphQL for a travel themed website that is responsive for desktop and mobile.",
		image: travelWebsite,
		tags: ["Gatsby", "Styled Components", "GraphQL"],
		source: "https://github.com/aicprog/Gatsby-Travel-Website/tree/master",
		visit: "https://aicprog.github.io/Gatsby-Travel-Website/",
		id: 1,
	},

	// {
	//   title: 'Pizza Website',
	//   description: "Using React and styled components for a pizza themed e-commerce website that is responsive for desktop. ",
	//     image: img3,
	//     tags: ['React', 'Styled Components'],
	//   source: 'https://github.com/aicprog/React-Pizza-Website/tree/website',
	//   visit: 'https://aicprog.github.io/React-Pizza-Website/',
	//   id: 2,
	// },

];

export const TimeLineData = [
  { year: 2018, text: 'Started my journey, taking my first web classes at the Cal State LA', },
  { year: 2019, text: 'Enrolled in online courses (coursera, udemy) to go beyond the fundamentals.', },
  { year: 2020, text: 'Graduated from CalstateLA with a degree in Computer Science and began to learn react, redux, and styled-components'},
  { year: 2021, text: 'Started coding my own projects', },

];