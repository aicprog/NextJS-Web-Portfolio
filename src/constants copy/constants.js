import currencyWebsite from '../../public/images/p1.png';
import travelWebsite from '../../public/images/p2.png';
import comfortDepo from '../../public/images/comfort-depo.png';
import astraClothing from '../../public/images/astra-clothing.png';
import gitHubSearch from '../../public/images/gitHub-search.png'
import netflix from '../../public/images/netflix.png'
import amazon from '../../public/images/amazon.png'

export const projectsList = [
	{
		title: 'Comfort Depo',
		description:
			'Using React, Styled Components, and Stripe for a responsive and mobile-friendly e-commerce home improvement website.',
		image: comfortDepo,
		tags: ['React', 'Stripe', 'Firebase', 'Smooth Scroll', 'Styled-Components'],
		source: 'https://github.com/aicprog/React-Ecommerce-Comfort-Depo',
		visit: 'https://comfort-depo.netlify.app/',
		id: 0,
	},
	{
		title: 'Astra Clothing',
		description:
			'Using React, Redux, Sass, and Stripe for a e-commerce clothing website that is responsive and mobile-friendly. ',
		image: astraClothing,
		tags: ['React', 'Redux', 'SASS', 'Styled Components', 'Firebase'],
		source: 'https://github.com/aicprog/React-Ecommerce-Astra-Clothing',
		visit: 'https://astra-clothing.netlify.app/',
		id: 1,
	},
	{
		title: 'Netflix Clone',
		description:
			'Using React, Styled Components and the TBDB API in order to recreate the Netflix Website. ',
		image: netflix,
		tags: ['React', 'Styled Components', 'TBDB API', 'Axios'],
		source: 'https://github.com/aicprog/Netflix-Clone',
		visit: 'https://netflix-clone-web-app.netlify.app/',
		id: 2,
	},
	{
		title: 'Amazon Clone',
		description:
			'Using React, Redux, Sass, and Stripe for a e-commerce clothing website that is responsive and mobile-friendly. ',
		image: amazon,
		tags: ['React', 'CSS', 'Firebase', 'FakeStoreAPI'],
		source: 'https://github.com/aicprog/Amazon-Clone',
		visit: 'https://amazon-clone-ws.netlify.app/',
		id: 3,
	},
	{
		title: 'GitHub Search Analyzer ',
		description:
			'Using the Github API, it allows a user to search for a valid github user and returns useful information via the FusionCharts API ',
		image: gitHubSearch,
		tags: ['React', 'GitHub API', 'FusionCharts API'],
		source: 'https://github.com/aicprog/React-GitHub-Search',
		visit: 'https://gthub-search.netlify.app/',
		id: 4,
	},

	{
		title: 'Travel Website',
		description:
			'Using Gatsby, React and GraphQL for a travel themed website that is responsive for desktop and mobile.',
		image: travelWebsite,
		tags: ['Gatsby', 'Styled Components', 'GraphQL'],
		source: 'https://github.com/aicprog/Gatsby-Travel-Website/tree/master',
		visit: 'https://aicprog.github.io/Gatsby-Travel-Website/',
		id: 5,
	},
];

export const TimeLineData = [
  { year: 2018, text: 'Started my journey, taking my first web classes at the Cal State LA', },
  { year: 2019, text: 'Enrolled in online courses (coursera, udemy) to go beyond the fundamentals covered in my university classes.', },
  { year: 2020, text: 'Graduated from CalstateLA with a Bachelors degree in Computer Science and began to learn react, redux, and styled-components'},
  { year: 2021, text: 'Continued learning but focused on coding more robust and functional projects', },

];