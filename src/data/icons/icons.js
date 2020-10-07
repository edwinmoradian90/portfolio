import React from "react";
import { FaAngellist, FaLinkedin, FaGithub, FaMedium } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const icons = {
  angellist: <FaAngellist />,
  email: <MdEmail />,
  github: <FaGithub />,
  linkedin: <FaLinkedin />,
  medium: <FaMedium />,
  bootstrap: {
    colored: <i class="devicon-bootstrap-plain colored"></i>,
    plain: <i class="devicon-bootstrap-plain"></i>,
  },
  css: {
    colored: <i class="devicon-css3-plain-wordmark colored"></i>,
    plain: <i class="devicon-css3-plain-wordmark"></i>,
  },
  heroku: {
    colored: <i class="devicon-heroku-plain colored"></i>,
    plain: <i class="devicon-heroku-plain"></i>,
  },
  html: {
    colored: <i class="devicon-html5-plain-wordmark colored"></i>,
    plain: <i class="devicon-html5-plain-wordmark"></i>,
  },
  javascript: {
    colored: <i class="devicon-javascript-plain colored"></i>,
    plain: <i class="devicon-javascript-plain"></i>,
  },
  mongodb: {
    colored: <i class="devicon-mongodb-plain-wordmark colored"></i>,
    plain: <i class="devicon-mongodb-plain-wordmark"></i>,
  },
  node: {
    colored: <i class="devicon-nodejs-plain-wordmark colored"></i>,
    plain: <i class="devicon-nodejs-plain-wordmark"></i>,
  },
  postgresql: {
    colored: <i class="devicon-postgresql-plain colored"></i>,
    plain: <i class="devicon-postgresql-plain-wordmark "></i>,
  },
  rails: {
    colored: <i class="devicon-rails-plain colored"></i>,
    plain: <i class="devicon-rails-plain-wordmark colored"></i>,
  },
  react: {
    colored: <i class="devicon-react-original colored"></i>,
    plain: <i class="devicon-react-original-wordmark"></i>,
  },
  ruby: {
    colored: <i class="devicon-ruby-plain-wordmark colored"></i>,
    plain: <i class="devicon-ruby-plain-wordmark"></i>,
  },
  sass: {
    colored: <i class="devicon-sass-original colored"></i>,
    plain: <i class="devicon-sass-original"></i>,
  },
};

export default icons;
