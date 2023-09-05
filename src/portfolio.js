import React from 'react';

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '#top',
  title: 'Martin Islas.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Martin Islas',
  role: 'Full Stack Sofware Developer',
  description: ' ',
    
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/martin-islas/',
    github: 'https://github.com/martinislas',
    twitter: 'https://twitter.com/MartinIslas',
    telegram: 'https://t.me/MartinAlejandroIslas',
    whatsapp: 'https://api.whatsapp.com/send/?phone=855968593594&text&type=phone_number&app_absent=0',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Phnom Phen Photo Friends',
    description:
      'The platform allows local photographers in Phnom Penh to share their photos, vote for their favorite photos in different categories, and view the most popular photos of the month.',
    stack: ['MongoDB','Express', 'Node', 'Bootstrap' ],
    sourceCode: 'https://github.com/martinislas/ppphotofriends',
    livePreview: 'https://pp-photo-friends.onrender.com/',
  },
  {
    name: '4 Learn (Work in progress)',
    description:
      'I am currently developing components for the 4 Learn platform',
    stack: ['React'],
    sourceCode: 'https://github.com/martinislas/plai-components',
    livePreview: 'https://martinislas.github.io/plai-components/',
  },
  {
    name: 'DR Cinematic',
    description:
      'A business website for a local filmaker',
    stack: ['HTML5', 'CSS', 'JavaScript'],
    
    livePreview: 'https://drcinematic.netlify.app/',
  },
  {
    name: 'Photography Portfolio',
    description:
      'A portfolio website for a local photographer',
    stack: ['HTML5', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/martinislas/alexPortfolio',
    livePreview: 'https://martinislas.github.io/alexPortfolio/',
  },
  {
    name: 'Digital Card',
    description:
      'A digital card for a counsultant based in Singapore',
    stack: ['HTML5', 'CSS', 'JavaScript'],
    
    livePreview: 'https://cassandramok.netlify.app/',
  },
  {
    name: 'Personal Portfolio',
    description:
      'My personal photography portfolio',
    stack: ['HTML5', 'CSS','JavaScript'],
    sourceCode: 'https://github.com/martinislas/photography',
    livePreview: 'https://martinislas.github.io/photography/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'Node',
  'Express',	
  'React',
  'MongoDB',
  'MySQL',
  'Git',
  'Bootstrap',
  'Tailwind',
  'C++',
  'Python',
  'UI/UX',
  	
  
]

const services = [
{
  name: 'Web Development',
    description: React.createElement('div', null, [
      "First impressions have always been important, and these days, they're established after a quick Google search.", 
      React.createElement('br', null),
      "A professionally-designed website allows you to showcase your work from that very first touchpoint.",
      React.createElement('br', null),
      "Let me help you create the website that will make your business to be seen."
    ]),
    stack: ["Let's work together!"],
    
},

]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'martin.alejandro.islas@gmail.com',
}

export { header, about, projects, skills, services, contact }
