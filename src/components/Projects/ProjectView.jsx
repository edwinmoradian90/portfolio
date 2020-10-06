import React from "react";
import {
  ProjectsContainer,
  ProjectDemoLink,
  ProjectDescription,
  ProjectImage,
  ProjectInformationContainer,
  ProjectsList,
  ProjectsListItem,
  ProjectName,
  ProjectUrl,
} from "../style/projects/projectsStyle";

const ProjectsView = (props) => {
  const { projectsData } = props;
  return (
    <ProjectsContainer className="projectsView">
      <ProjectsList className="projectsWrapper">
        {projectsData.map((project) => {
          const { id, name, image, github, url, description } = project;
          return (
            <ProjectsListItem className="projectContainer">
              <ProjectImage src={image} alt={id} />
              <ProjectInformationContainer className="projectInformationContainer">
                <ProjectDemoLink
                  href={url}
                  target="_blank"
                  className="projectDemoLink"
                >
                  <ProjectName className="projectName">{name}</ProjectName>
                  <ProjectUrl>{url}</ProjectUrl>
                </ProjectDemoLink>
                <ProjectDescription className="projectDescription">
                  {description}
                </ProjectDescription>
              </ProjectInformationContainer>
            </ProjectsListItem>
          );
        })}
      </ProjectsList>
    </ProjectsContainer>
  );
};

export default ProjectsView;
