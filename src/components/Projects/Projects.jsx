import React from "react";
import Header from "../Header/Header";
import ProjectsView from "./ProjectView";
import projectsData from "../../data/projects/projects.json";

const Projects = (props) => {
  return (
    <div className="projects">
      <Header />
      <ProjectsView projectsData={projectsData} />
    </div>
  );
};

export default Projects;
