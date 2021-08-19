// const img1 = require('../../out/images/p1.png').default
import img1 from '../../public/images/p1.png';
import img2 from '../../public/images/p2.png';
import img3 from '../../public/images/p3.png';

export const projects = [
  {
    title: 'Currency Website',
    description: "Using React, Styled Components, and Smooth Scroll for a responsive and mobile-friendly credit card website.",
      image: img1,
      tags: ['React', 'Styled Components', 'Smooth Scroll'],
    source: 'https://github.com/aicprog/React-Currency-Website/tree/website',
    visit: 'https://aicprog.github.io/React-Currency-Website/',
    id: 0,
  },
  {
    title: 'Travel Website',
    description:"Using Gatsby, React and GraphQL for a travel themed website that is responsive for desktop and mobile.",
    image: img2,
    tags: ['Gatsby', 'Styled Components', 'GraphQL'],
    source: 'https://github.com/aicprog/Gatsby-Travel-Website/tree/master',
    visit: 'https://aicprog.github.io/Gatsby-Travel-Website/',
    id: 1,
  },
  {
    title: 'Pizza Website',
    description: "Using React and styled components for a pizza themed e-commerce website that is responsive for desktop. ",
      image: img3,
      tags: ['React', 'Styled Components'],
    source: 'https://github.com/aicprog/React-Pizza-Website/tree/website',
    visit: 'https://aicprog.github.io/React-Pizza-Website/',
    id: 2,
  },
  // {
  //   title: 'Unichat',
  //   description: "This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application",
  //   image: '/images/4.jpg',
  //   tags: ['React', 'ChatEngine', 'Firebase'],
  //   source: 'https://google.com',
  //   visit: 'https://google.com',
  //   id: 3,
  // },
];

export const TimeLineData = [
  { year: 2018, text: 'Started my journey, taking my first web classes at the Cal State LA', },
  { year: 2019, text: 'Enrolled in online courses (coursera, udemy) to go beyond the fundamentals.', },
  { year: 2020, text: 'Began to learn react, nextJS, and styled-components'},
  { year: 2021, text: 'Started coding my own projects', },

];