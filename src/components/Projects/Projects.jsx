import React from "react";
import Header from "../Header/Header";
import ProjectsView from "./ProjectView";

const Projects = (props) => {
  return (
    <div className="projects">
      <Header />
      <ProjectsView />
    </div>
  );
};

export default Projects;
