import { nanoid } from "nanoid";

// HEAD DATA
export const headData = {
  title: "Milind Yadav | Dev",
  lang: "en",
  description: "Welcome to my portfolio",
};

// HERO DATA
export const heroData = {
  title: "Hello, my name is",
  name: "Milind Yadav",
  subtitle: "I'm a Full Stack Developer.",
  cta: "Get to know me",
};

// ABOUT DATA
export const aboutData = {
  img: "portfolio-image.jpg",
  paragraphOne:
    "Solution-driven and highly-collaborative Full-Stack Developer, who is ardent about integrating libraries to build incredible projects and web applications. Excelling in using technologies such as Angular, React, JavaScript, C#, .NET, SQL, MongoDB, Node, ExpressJS, HTML5, CSS3 and REST APIs. Through my work history, you can expect a proven ability in organization, efficiency, and teamwork.",
  paragraphTwo:
    "My entire life, I have been a tech-savvy extraordinaire in various sectors of technology.",
  paragraphThree:
    "My passion for people and technology has inspired me to enable the full potential of humans and the internet. Continual education and keeping up with the latest technology trends are both very important to me. Check out my Github as I regularly upload projects!",
  resume: "Resume", // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: "recipes-shopping-app-image.png",
    title: "Recipes Shopping App",
    info: "MEAN Stack app created to shopp required ingredients for respective recipes.",
    info2: "Technologies used: Angular, Node.JS, Express.JS, MongoDB",
    url: "https://ng-recipes-shopping-app.web.app/",
    repo: "https://github.com/yadavmilind08/recipes-shopping-app", // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "",
  btn: "",
  email: "yadavmilind08@gmail.com",
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: "linkedin",
      url: "https://www.linkedin.com/in/yadavmilind08/",
    },
    {
      id: nanoid(),
      name: "github",
      url: "https://github.com/yadavmilind08",
    },
    {
      id: nanoid(),
      name: "twitter",
      url: "https://twitter.com/mr_millu",
    },
  ],
};
