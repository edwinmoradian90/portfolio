import React from "react";
import Header from "../Header/Header";
import icons from "../../data/icons/icons";
import ProjectsView from "./ProjectsView";
import projectsData from "../../data/projects/projects";
import bookstore from "../../assets/images/projects/bookstore.png";

const Projects = () => {
  const projectImages = [bookstore];
  return (
    <div className="projects">
      <Header />
      <ProjectsView
        projectImages={projectImages}
        icons={icons}
        projectsData={projectsData}
      />
    </div>
  );
};

export default Projects;
