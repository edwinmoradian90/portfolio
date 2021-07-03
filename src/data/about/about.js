import React from "react";
import { AboutHref, AboutLink } from "../../components/style/about/aboutStyle";

export default {
  about: {
    title: "About me",
    summary: (
      <>
        Hi, my name is Edwin Moradian. I'm a developer with a background in
        physics. I love programming, traveling, and making a difference where I
        can. In the last three years, I've primarily focused in the web
        development space and have worked with many diverse teams remotely from
        all parts of the globe. If you need a project built or have a job opportunity, please{" "}
        <AboutHref href="mailto:edwin.moradian90@gmail.com">
          contact me
        </AboutHref>{" "}
        or check out some of my{" "}
        <AboutLink to="/projects"> recent projects.</AboutLink>
      </>
    ),
  },
  contact: {
    title: "Contact",
    urls: [
      {
        id: "linkedin",
        name: "LinkedIn",
        url: "https://linkedin.com/in/edwin-moradian",
      },
      {
        id: "github",
        name: "GitHub",
        url: "https://github.com/edwinmoradian90",
      },
      {
        id: "medium",
        name: "Medium",
        url: "https://medium.com/@edwin.moradian90",
      },
      {
        id: "angellist",
        name: "AngelList",
        url: "https://angel.co/u/edwin-moradian",
      },
      {
        id: "email",
        name: "Email",
        url: "mailto:edwin.moradian90@gmail.com",
      },
    ],
  },
};
