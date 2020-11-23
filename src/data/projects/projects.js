import tracker from "../../assets/images/projects/tracker.png";
import newsweek from "../../assets/images/projects/newsweek.jpg";
import bookstore from "../../assets/images/projects/bookstore.png";
import facebook from "../../assets/images/projects/fakebook.png";
import calculator from "../../assets/images/projects/calculator.png";
import ecommerce from "../../assets/images/projects/ecommerce.jpg";

export default [
  {
    id: "trackerapp",
    name: "Tracker App",
    image: tracker,
    github: "https://github.com/edwinmoradian90/tracker-app",
    url: "https://tracker-app-react-rails.herokuapp.com",
    description:
      "A tracking app that trackers amount driven, fuel usage, and driving limit. Built with React, Redux, and Rails.",
    tools: [
      "rails",
      "react",
      "redux",
      "postgresql",
      "sass",
      "heroku",
      "webpack",
    ],
  },
  {
    id: "newsweek",
    name: "NewsWeek Clone",
    image: newsweek,
    github: "https://github.com/edwinmoradian90/newsweek-clone-bootstrap",
    url:
      "https://raw.githack.com/edwinmoradian90/newsweek-clone-bootstrap/master/index.html",
    description:
      "A NewsWeek clone built to replicate the popular news outlet, 'NewsWeek'. Built with HTML, CSS, and Bootstrap 4.",
    tools: ["html", "css", "bootstrap"],
  },
  {
    id: "bookstore",
    name: "Bookstore CMS",
    image: bookstore,
    github: "https://github.com/edwinmoradian90/bookstore-cms",
    url: "https://microverse-bookstore.herokuapp.com",
    description:
      "A book store CMS that handles and tracks books read. Built with React, Redux, and Styled Components.",
    tools: ["rails", "react", "redux", "postgresql", "sass", "heroku"],
  },
  {
    id: "facebook",
    name: "Facebook Clone",
    image: facebook,
    github: "https://github.com/edwinmoradian90/facebook-clone",
    url: "https://shielded-taiga-48885.herokuapp.com",
    description:
      "A FaceBook clone with login, friends and friend requests, timeline, and more. Built with Ruby and Rails.",
    tools: ["rails", "postgresql", "sass", "heroku"],
  },
  {
    id: "calculator",
    name: "Calculator",
    image: calculator,
    github: "https://github.com/edwinmoradian90/calculator",
    url: "https://calculator-a6ddd.web.app",
    description:
      "A calculator with all adding, subtracting, dividing, and multiplying functionality. Built with React.",
    tools: ["react", "css", "firebase"],
  },
  {
    id: "eccommerce",
    name: "Ecommerce App",
    image: ecommerce,
    github: "https://github.com/edwinmoradian90/ecommerce_webapp",
    url: "https://stark-coast-27283.herokuapp.com",
    description:
      "My first project, an ecommerce application with login, checkout, payment, and more. Built with React and Nodejs.",
    tools: ["react", "node", "mongodb", "bootstrap", "heroku"],
  },
];
