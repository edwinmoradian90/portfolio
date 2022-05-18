import tracker from '../../assets/images/projects/tracker.png';
import newsweek from '../../assets/images/projects/newsweek.jpg';
import facebook from '../../assets/images/projects/fakebook.png';
import astro from '../../assets/images/projects/astro.png';
import gumar from '../../assets/images/projects/gumar-screenshot-wide.jpg';

export default [
  {
    id: 'gumar',
    name: 'Gumar',
    image: gumar,
    github: 'https://github.com/edwinmoradian90/gumar',
    url: 'https://vimeo.com/711234278',
    description:
      'A finance management tool that tracks transactions and exports data directly to Google sheets. Built with React Native, Redux, and Typescript.',
    tools: ['react', 'redux', 'typescript'],
  },
  {
    id: 'game',
    name: 'Space Shooter',
    image: astro,
    github: 'https://github.com/edwinmordian/runner',
    url: 'https://bit.ly/36aWcVm',
    description:
      'A space shooter built with JavaScript! Just float around and shoot the asteroids.',
    tools: ['html', 'css', 'javascript'],
  },
  {
    id: 'newsweek',
    name: 'NewsWeek Clone',
    image: newsweek,
    github: 'https://github.com/edwinmoradian90/newsweek-clone-bootstrap',
    url: 'https://raw.githack.com/edwinmoradian90/newsweek-clone-bootstrap/master/index.html',
    description:
      "A NewsWeek clone built to replicate the popular news outlet, 'NewsWeek'. Built with HTML, CSS, and Bootstrap 4.",
    tools: ['html', 'css', 'bootstrap'],
  },
  {
    id: 'trackerapp',
    name: 'Tracker App',
    image: tracker,
    github: 'https://github.com/edwinmoradian90/tracker-app',
    url: 'https://tracker-app-react-rails.herokuapp.com',
    description:
      'A tracking app that trackers amount driven, fuel usage, and driving limit. Built with React, Redux, and Rails.',
    tools: [
      'rails',
      'react',
      'redux',
      'postgresql',
      'sass',
      'heroku',
      'webpack',
    ],
  },
  {
    id: 'facebook',
    name: 'Facebook Clone',
    image: facebook,
    github: 'https://github.com/edwinmoradian90/facebook-clone',
    url: 'https://shielded-taiga-48885.herokuapp.com',
    description:
      'A FaceBook clone with login, friends and friend requests, timeline, and more. Built with Ruby and Rails.',
    tools: ['rails', 'postgresql', 'sass', 'heroku'],
  },
];
