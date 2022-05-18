import React from 'react';
import { FaAngellist, FaLinkedin, FaGithub, FaMedium } from 'react-icons/fa';
import { MdEmail, MdDateRange } from 'react-icons/md';
import { SiFirebase, SiRedux } from 'react-icons/si';
import { GiHamburgerMenu } from 'react-icons/gi';

const icons = {
  angellist: <FaAngellist />,
  email: <MdEmail />,
  github: <FaGithub />,
  hamburger: <GiHamburgerMenu />,
  linkedin: <FaLinkedin />,
  medium: <FaMedium />,
  firebase: <SiFirebase />,
  redux: <SiRedux />,
  calendar: <MdDateRange />,
  bootstrap: {
    colored: <i class='devicon-bootstrap-plain colored'></i>,
    plain: <i class='devicon-bootstrap-plain'></i>,
  },
  css: {
    colored: <i class='devicon-css3-plain colored'></i>,
    plain: <i class='devicon-css3-plain'></i>,
  },
  heroku: {
    colored: <i class='devicon-heroku-plain colored'></i>,
    plain: <i class='devicon-heroku-plain'></i>,
  },
  html: {
    colored: <i class='devicon-html5-plain colored'></i>,
    plain: <i class='devicon-html5-plain'></i>,
  },
  javascript: {
    colored: <i class='devicon-javascript-plain colored'></i>,
    plain: <i class='devicon-javascript-plain'></i>,
  },
  mongodb: {
    colored: <i class='devicon-mongodb-plain colored'></i>,
    plain: <i class='devicon-mongodb-plain'></i>,
  },
  node: {
    colored: <i class='devicon-nodejs-plain colored'></i>,
    plain: <i class='devicon-nodejs-plain'></i>,
  },
  postgresql: {
    colored: <i class='devicon-postgresql-plain colored'></i>,
    plain: <i class='devicon-postgresql-plain '></i>,
  },
  rails: {
    colored: <i class='devicon-rails-plain colored'></i>,
    plain: <i class='devicon-rails-plain colored'></i>,
  },
  react: {
    colored: <i class='devicon-react-original colored'></i>,
    plain: <i class='devicon-react-original'></i>,
  },
  ruby: {
    colored: <i class='devicon-ruby-plain-wordmark colored'></i>,
    plain: <i class='devicon-ruby-plain-wordmark'></i>,
  },
  typescript: {
    colored: <i class='devicon-typescript-plain colored'></i>,
    plain: <i class='devicon-typescript-plain'></i>,
  },
  sass: {
    colored: <i class='devicon-sass-original colored'></i>,
    plain: <i class='devicon-sass-original'></i>,
  },
  webpack: {
    colored: <i class='devicon-webpack-plain colored'></i>,
    plain: <i class='devicon-webpack-plain'></i>,
  },
};

export default icons;
