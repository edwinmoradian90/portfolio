import React from "react";
import Header from "../Header/Header";
import icons from "../../data/icons/icons";
import ProjectsView from "./ProjectsView";
import projectsData from "../../data/projects/projects.json";

const Projects = (props) => {
  return (
    <div className="projects">
      <Header />
      <ProjectsView icons={icons} projectsData={projectsData} />
    </div>
  );
};

export default Projects;
