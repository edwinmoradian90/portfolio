import React from "react";
import Header from "../Header/Header";
import AboutView from "./AboutView";
import aboutData from "../../data/about/about.json";

const About = (props) => {
  return (
    <div className="about">
      <Header />
      <AboutView aboutData={aboutData} />
    </div>
  );
};

export default About;
