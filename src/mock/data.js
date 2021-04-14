import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Lucille | Software Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Lucille',
  subtitle: 'I am a Software Engineer',
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile_square2.jpg',
  text: {
    paragraphOne: `I am a Software Engineer with experience in the design and development of full-stack web solutions following Agile methodologies.  I take pride in my work and ship high-quality, well-tested code to create a bug-free user experience.`,
    paragraphTwo: `I have previously worked as both a Data Scientist and a Mine Geologist, but now I am pursuing a career in what I enjoy most.  As a creative person who loves to build things and understand how and why they work, software development is my passion.`,
    paragraphThree: `I love to learn and am constantly expanding my programming abilities. Check out my latest projects below!`,
    paragraphFour: `Outside of programming I enjoy paper craft, reading science fiction, cooking, exploring nature, and looking after my adorable cats.`,
  },
  resume: '../../pdf/Lucille-Ablett-CV.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: '60decibels.png',
    title: '60 Decibels Impact Platform (Co-Creator)',
    info: 'A platform for customers to create their own impact measurement projects, and access project status, results, and reports on private user dashboards. ',
    info2: 'React & Redux, Next.js, Prisma & GraphQL, Python, PowerBI.',
    url: 'https://app.60decibels.com',
  },
  {
    id: uuidv1(),
    img: 'smartbrain.jpg',
    title: 'Smart Brain',
    info: 'ReactJS application implementing Clarifai computer vision API.',
    info2: 'ReactJS, Node.js, Heroku.',
    url: 'https://smart-brain--2020.herokuapp.com/',
    repo: 'https://github.com/lablett/face-recognition-app', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'smartbrain-api.jpg',
    title: 'Smart Brain API',
    info: 'Backend for Smart Brain.',
    info2: 'Express.js, Postman, bcrypt-nodejs, PostgreSQL.',
    url: 'https://smart-brain--2020.herokuapp.com/',
    repo: 'https://github.com/lablett/smart-brain-api', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'web.png',
    title: 'Professional Website',
    info: `My first website created to showcase my development skills.  I have learnt a lot since then and would do pretty much everything differently, but it was a great learning experience!`,
    info2: 'HTML, CSS, Bootstrap 4, PHP, JavaScript.',
    url: 'https://www.lucilleablett.co.uk',
    repo: 'https://github.com/lablett/personal-website', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'dev.png',
    title: 'Location Based Quiz',
    info: `Android application using a three-tier web architecture. The application comprised web, mobile, and PostgreSQL database components.`,
    info2: 'Java, Android, HTML, CSS, JavaScript, PostgreSQL, Google Maps API.',
    url: '',
    repo: 'https://github.com/lablett/AndroidQuizApp', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'map.png',
    title: 'Machine Learning for Mineral Prospectivity Mapping',
    info: `Comparison study of 3 machine learning algorithms for creating predictive maps of mineralisation. Point samples of soil element composition were modelled using raster images of geophysical and remote sensing data.`,
    info2: 'R, Support Vector Regression, RandomForest, XGBoost.',
    url: 'https://github.com/lablett/Machine-Learning-Mineral-Mapping',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'rbms.jpg',
    title: 'Restaurant Billing Management System',
    info: 'First ever Java application created for introductory programming MSc course',
    info2: 'Java, JavaFX, SceneBuilder.',
    url: 'https://youtu.be/xa1nPjE3jC4',
    repo: 'https://github.com/lablett/RestaurantBillingManagementSystem', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'robofriends.jpg',
    title: 'RoboFriends',
    info: 'React app implementing a search box to filter robot friends',
    info2: 'ReactJS, Node.js.',
    url: 'https://lablett.github.io/robofriends/',
    repo: 'https://github.com/lablett/robofriends', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'ballot-bots.jpg',
    title: 'Ballot Bots',
    info: 'React app to up-vote and down-vote robots, using Hooks.',
    info2: 'ReactJS + Hooks.',
    url: 'https://lablett.github.io/ballot-bots/',
    repo: 'https://github.com/lablett/ballot-bots', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me?  Great!',
  btn: `Let's talk`,
  email: 'lucille@lucilleablett.co.uk',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/lablett',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/lucilleablett',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
