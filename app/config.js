'use strict';

var profile = {

  companies: [
    {
      name: 'Living Indie Tv',
      logo: 'logo-livingindie.png',
      description: 'At Living Indie I worked remotely in a small team of three developers, one designer and three maketing and sales people. Development was relaly independent, there were no management methodology and I was used to push the project forward with regular conferences with the team and day to day email and chat communication.'
    },
    {
      name: 'Euroformac',
      logo: 'logo-euroformac.png',
      description: 'The development team at Euroformac was a small team of three developers in charge of the new features and upgrades of a bespoke learning platform over Moodle. But this team was inside a multi-company structure of more than 20 people, a marketing agency in charge of the design, a consultancy company in charge of the servers and the Spanish Minitry of Education was the client in charge of the content. This made the project distributed, remaining mainly in online communication with monthly meetings of all the companies involved to check the big plan.'
    },
    {
      name: 'Pure360',
      logo: 'pure-logo.svg',
      description: 'Pure360 has the biggest Front-end development team I have worked with, there were 8 developers in-house, we used kanban to keep track of the tasks and I had the opportunity to have code reviews and even do some pair programming. It was a great team experience and I learn a lot from my peers and managers.'
    },
    {
      name: 'Framboise!',
      logo: 'logo-framboise.png',
      description: 'During the almost three years at Framboise! I was the main (and most on the time the only) developer. I was in charge of the whole lifecycle of the projects, from sketch to deploy and server maintenance, but I was helped sometimes by some freenlace developers. Having full control and responsibility over the projects is great because you can make decissions, you get the opportunity to know the client and their needs so you can be customer centered, your contribution is essencial and you know every part of the project. But a team of one person can only do that much. You have to balance your tasks every day to implement the app while you keep an eye in the server and attend company meetings or even meetings with the client.'
    },
    {
      name: 'Lemonquest',
      logo: 'logo-lemonquest.jpg',
      description: 'At Lemonquest teams were organized around games and they shrink or grow depending on the game needs and the development stage. This allowed for a very flexible environment where everyone was important and could contribute to the game. I am proud of completing two games as lead developer at Lemonquest, with several developers working with me depending on the project.'
    }
  ],

  courses: [
    {
      year: '2016',
      company: 'Pluralsight',
      title: 'Hardcore functional programming in JavaScript'
    },
    {
      year: '2016',
      company: 'Pluralsight',
      title: 'Advanced JavaScript'
    },
    {
      year: '2013',
      company: 'Agil8',
      title: 'Real Kanban'
    },
    {
      year: '2012',
      company: 'Udacity',
      title: 'CS-101 - Python programming course'
    },
    {
      year: '2012',
      company: 'Udacity',
      title: 'CS-253 - Build a web searcher...'
    },
    {
      year: '2009',
      company: 'ISF',
      title: 'Introduction to development cooperation'
    },
    {
      year: '2005',
      company: 'ASDE',
      title: 'Free-time monitor'
    }
  ],

  jobs: [
    {
      title: 'Living Indie Tv - Front-end Developer',
      from_date: 'jan 2015',
      to_date: 'sep 2015',
      description: 'Development of single page app using AngularJs: music player with social features. Development of several single page microsites for live events streaming.'
    },
    {
      title: 'Euroformac - Fullstack developer',
      from_date: 'jul 2014',
      to_date: 'jan 2015',
      description: 'Customization, upgrade and redesign implementation over a Moodle learning platform.'
    },
    {
      title: 'Freelance web developer',
      from_date: 'feb 2014',
      to_date: 'jul 2014',
      description: 'Web applications architect, projects feasibility and project budget estimations, full-stack development.'
    },
    {
      title: 'Web Developer at Pure360',
      from_date: 'sep 2013',
      to_date: 'feb 2014',
      description: 'Working in Pure360 back-end platform maintenance and new products development. Agile development group with great focus in team work. Back-end Development: PHP, Laravel 4, MySql. Front-end Development: AngularJs, NodeJs, Grunt, Jenkins.'
    },
    {
      title: 'Freelance web developer',
      from_date: 'abr 2013',
      to_date: 'sep 2013',
      description: 'Web applications architect, projects feasibility and project budget estimations, full-stack development.'
    },
    {
      title: 'Web developer at Framboise!',
      from_date: 'jul 2010',
      to_date: 'apr 2013',
      description: 'Being the only developer in a small company I was in charge of the whole life cycle of the projects, from initial concept, budget estimation, planning, development, managing outsourcing when necessary, deployment and maintenance. Main technologies: LAMP, CodeIgniter, Wordpress, JavaScript,  HTML5, CSS3. '
    },
    {
      title: 'PHP developer at CRI',
      from_date: 'jan 2010',
      to_date: 'jul 2010',
      description: 'Full-stack developer of custom pages using CodeIgniter. PHP scripts for automatic tasks: web crawlers, feed inspectors, web maintenance'
    },
    {
      title: 'J2ME developer at Lemonquest',
      from_date: 'sep 2007',
      to_date: 'aug 2009',
      description: 'Video game developer involved in the whole lifecycle of the projects.'
    }
  ],
  
  skillset: [
    {
      title: 'Programming languages',
      skills: [
      {
        name: 'PHP',
        level: 9,
        experience: 5,
        bar_color: 'warning'
      },
      {
        name: 'JavaScript',
        level: 9,
        experience: 5,
        bar_color: 'warning'
      },
      {
        name: 'Java',
        level: 6,
        experience: 2,
        bar_color: 'warning'
      },
      {
        name: 'Bash',
        level: 2,
        experience: 1,
        bar_color: 'warning'
      },
      {
        name: 'Python',
        level: 2,
        experience: 0,
        bar_color: 'warning'
      },
      {
        name: 'MySQL',
        level: 5,
        experience: 3,
        bar_color: 'warning'
      }
      ]
    },

    { 
      title: 'Known OSS frameworks',
      skills: [
      {
        name: 'AngularJS',
        level: 8,
        experience: 1,
        bar_color: 'info'
      },
      {
        name: 'jQuery',
        level: 8,
        experience: 3,
        bar_color: 'info'
      },
      {
        name: 'Laravel',
        level: 6,
        experience: 1,
        bar_color: 'info'
      },
      {
        name: 'Slim',
        level: 6,
        experience: 1,
        bar_color: 'info'
      },
      {
        name: 'Wordpress',
        level: 6,
        experience: 1,
        bar_color: 'info'
      },
      {
        name: 'Moodle',
        level: 6,
        experience: 1,
        bar_color: 'info'
      }]
    },

    {
      title: 'Other Skills',
      skills: [
      {
        name: 'English',
        level: 7,
        experience: 1,
        bar_color: 'success', 
      },
      {
        name: 'French',
        level: 1,
        experience: 0,
        bar_color: 'success', 
      },
      {
        name: 'Git',
        level: 6,
        experience: 4,
        bar_color: 'success', 
      }]
    }
  ]
};