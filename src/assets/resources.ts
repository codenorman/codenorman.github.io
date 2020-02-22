import {Resource} from '../app/resource/resource.model';

export const resources: Resource[] = [
  {
    title: 'Angular 5',
    url: 'https://www.udemy.com/angular-5',
    description: 'Free beginner intro to angular',
    paid: false,
    upVotes: 0,
    tags: ['angular',]
  },
  {
    title: 'Git Branching',
    url: 'https://learngitbranching.js.org',
    description: 'Learn Git Branching',
    paid: false,
    upVotes: 0,
    tags: ['git'],
  },
  {
    title: 'freeCodeCamp',
    url: 'https://www.freecodecamp.org/',
    description: 'Learn to code. Build Projects. Earn Certification.',
    paid: false,
    upVotes: 0,
    tags: ['html', 'javascript', 'css', 'python'],
  },
  {
    title: 'Packt Free Book of the Day',
    url: 'https://www.packtpub.com/packt/offers/free-learning',
    description: 'Packt Free Learning',
    paid: false,
    upVotes: 0,
    tags: ['book'],
  },
  {
    title: 'JavaScript 30',
    url: 'https://javascript30.com/',
    description: '30 Day Vanilla JS Coding Challenge',
    paid: false,
    upVotes: 0,
    tags: ['javascript'],
  },
  {
    title: 'JavaScript snippets',
    url: 'https://github.com/Chalarangelo/30-seconds-of-code#readme',
    description: 'Curated collection of useful Javascript snippets that you can understand in 30 seconds or less.',
    paid: false,
    upVotes: 0,
    tags: ['javascript'],
  },
  {
    title: 'Code Academy',
    url: 'https://www.codecademy.com',
    description: 'Code Academy',
    paid: false,
    upVotes: 0,
    tags: ['courses'],
  },
  {
    title: 'Code School',
    url: 'https://www.codeschool.com',
    description: 'Code School',
    paid: false,
    upVotes: 0,
    tags: ['courses'],
  },
  {
    title: 'Team Tree House',
    url: 'https://teamtreehouse.com',
    description: 'Code School',
    paid: false,
    upVotes: 0,
    tags: ['courses'],
  },
  {
    title: 'ng-conf session videos',
    url: 'https://www.youtube.com/user/ngconfvideos',
    description: 'ng-conf videos of past sessions',
    paid: false,
    upVotes: 0,
    tags: ['angular'],
  },

  {
    title: 'twit.tv',
    url: 'https://twit.tv/',
    description: 'podcast network',
    paid: false,
    upVotes: 0,
    tags: ['podcast'],
  },
  {
    title: '.NET Rocks',
    url: 'https://www.dotnetrocks.com/',
    description: '.NET Rocks! is a weekly talk show for anyone interested in programming on the Microsoft .NET platform. The shows range from introductory information to hardcore geekiness.',
    paid: false,
    upVotes: 0,
    tags: ['podcast'],
  },
  {
    title: 'Developer On Fire',
    url: 'https://developeronfire.com/',
    description: 'podcast: Inspiring software developers tell their stories',
    paid: false,
    upVotes: 0,
    tags: ['podcast'],
  },
  {
    title: 'Devchat.tv',
    url: 'https://devchat.tv/',
    description: 'podcast network',
    paid: false,
    upVotes: 0,
    tags: ['podcast'],
  },

  {
    title: 'Angular Air',
    url: 'https://angularair.com/',
    description: 'A live videocast on YouTube about all things Angular (by Google), a JavaScript platform for building mobile and desktop web applications.',
    paid: false,
    upVotes: 0,
    tags: ['videocast', 'angular'],
  },

  {
    title: 'Command_Line Heroes',
    url: 'https://www.redhat.com/en/command-line-heroes',
    description: 'An original podcast about the people who transform technology from the command line up. Presented by Red Hat.',
    paid: false,
    upVotes: 0,
    tags: ['podcast'],
  },

  {
    title: 'Risky Business',
    url: 'https://risky.biz/',
    description: 'Risky Business was established in February, 2007. Published weekly, the Risky Business podcast features news and in-depth commentary from security industry luminaries. Hosted by award-winning journalist Patrick Gray, Risky Business has become a must-listen digest for information security professionals. We are also known to publish blog posts from time to time.',
    paid: false,
    upVotes: 0,
    tags: ['podcast', 'security'],
  },

  {
    title: 'Toolsday',
    url: 'https://spec.fm/podcasts/toolsday',
    description: 'A show about the latest in tech tools, tips, and tricks on Tuesdays at 2',
    paid: false,
    upVotes: 0,
    tags: ['podcast'],
  },
  {
    title: 'Manning Publications',
    url: 'https://www.manning.com/',
    description: 'ebooks/Books on technology ',
    paid: false,
    upVotes: 0,
    tags: ['book'],
  },
  {
    title: 'Humble Bundle',
    url: 'https://www.humblebundle.com/',
    description: 'Bundles of ebooks/software offered for a donation',
    paid: true,
    upVotes: 0,
    tags: ['book', 'software'],
  },

  {
    title: 'MS Channel 9',
    url: 'https://channel9.msdn.com/',
    description: 'Welcome to Channel 9! We are a humble group of developers and technical enthusiasts within Microsoft who operate this site devoted to including you into the conversations we have.',
    paid: false,
    upVotes: 0,
    tags: ['video'],
  },

];

export const tags = () => {
  const t = resources.reduce((tags, resource) => {
    return tags.concat(resource.tags);
  }, []);
  return Array.from(new Set(t));
};


