import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Diane So | Software Engineer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: "Let's hang", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi, I'm",
  name: 'Diane',
  subtitle: 'your next Software Engineer',
  cta: 'Get to Know Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Hi, my name is Diane So and I am a software engineer located in the Greater NYC area. I worked in connecting Korean beauty brands with the US and EU markets for several years before pivoting to work in tech.',
  paragraphTwo:
    "My love for finding creative solutions to client issues first led me to consultancy followed by software development. In the past, I worked on many exciting projects for my clients with top retailers in the US including Nordstrom, Sephora, Costco, TJ Maxx and more. Once COVID forced me to come home to the US, I enrolled in a bootcamp program to learn more about coding. I spent the year following my bootcamp helping small businesses launch or improve their online presence. It was rewarding to help them thrive, especially during a time where many were struggling. I'm no stranger to diving head first into learning new things and look forward to my continued development.",
  paragraphThree:
    "When I'm not tackling some code or creating something fun, I'm outside skiing/kayaking, working on a freelance project, or translating webtoons.",
  list:
    'Javascript, HTML5, CSS3, React, Redux, Ruby, Rails, Express, MongoDB, Git, Node, PostgreSQL, Sass',
  list2: 'testing testing',
  resume: 'https://drive.google.com/file/d/1Uugk1AzilUBgtzf3AYYk_X_RzRlHcTt8/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project4.png',
    title: 'Haven',
    info:
      'Haven is a social platform for interior lovers. It allows users to create an account, log in and post rooms they want to showcase. Sign in with user: admin password: 123456.',
    info2: '',
    url: 'https://haven-p4.netlify.app/',
    repo: 'https://github.com/sirkittles/Haven', // if no repo, the button will not show up,
    skills: 'React, Ruby, Rails, PostgreSQL',
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: "Sugar Mama's",
    info:
      "Sugar Mama's is an e-commerce store created in collaboration with a UX/UI team. Our dev team was able to accurately deliver the design and a full CRUD admin site which allows admin to add, edit, and delete products.",
    info2: '',
    url: 'https://thecandyshop.netlify.app/',
    repo: 'https://github.com/sirkittles/sei-p3-candy', // if no repo, the button will not show up
    skills: 'React, Express, Mongoose, MongoDB, Git',
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'about.Face',
    info:
      'This React app allows you to add your face products and log your skincare routines to help you find the routine that works best for you.',
    info2: '',
    url: 'https://about-face.netlify.app',
    repo: 'https://github.com/sirkittles/About.Face', // if no repo, the button will not show up
    skills: 'React, Airtable, Axios, CSS',
  },
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Ghibli Movie Finder',
    info:
      'Front-end web application which allows Ghibli lovers and newcomers alike to search for info on their favorite Ghibli titles. Utilizes the Ghibli API and the IMDB API to compile movie data and images.',
    info2: '',
    url: 'http://ghibli-movie-finder.surge.sh/',
    repo: 'https://github.com/sirkittles/Ghibli-Movie-Finder', // if no repo, the button will not show up
    skills: 'JavaScript, jQuery, HTML, CSS, API',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me? Awesome!',
  btn: "Let's Talk",
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
