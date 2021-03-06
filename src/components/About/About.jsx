import React from "react";
import Header from "../Header/Header";
import AboutView from "./AboutView";
import aboutData from "../../data/about/about";
import icons from "../../data/icons/icons";

const About = () => {
  return (
    <div className="about">
      <Header />
      <AboutView aboutData={aboutData} icons={icons} />
    </div>
  );
};

export default About;
