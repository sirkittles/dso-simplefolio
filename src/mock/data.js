import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Diane So | Software Engineer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, I\'m',
  name: 'Diane',
  subtitle: 'your next Software Engineer',
  cta: 'Get to Know Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1zglGAlhJhQ2RGUzEh5JAMTZ81CJffMcO/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: "Haven",
    info: '',
    info2: '',
    url: 'https://haven-p4.netlify.app/',
    repo: 'https://github.com/sirkittles/Haven', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: "Sugar Mama's",
    info: '',
    info2: '',
    url: 'https://thecandyshop.netlify.app/',
    repo: 'https://github.com/sirkittles/sei-p3-candy', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'about.Face',
    info: '',
    info2: '',
    url: 'https://about-face.netlify.app',
    repo: 'https://github.com/sirkittles/About.Face', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Ghibli Movie Finder',
    info: '',
    info2: '',
    url: 'http://ghibli-movie-finder.surge.sh/',
    repo: 'https://github.com/sirkittles/Ghibli-Movie-Finder', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'so.dianeyj@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/diane-so/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/sirkittles',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
