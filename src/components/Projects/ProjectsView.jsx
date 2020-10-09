import React from "react";
import {
  ProjectsContainer,
  ProjectDemoLink,
  ProjectDescription,
  ProjectIconsList,
  ProjectIconsListItem,
  ProjectImage,
  ProjectInformationContainer,
  ProjectsList,
  ProjectsListItem,
  ProjectName,
  ProjectUrl,
} from "../style/projects/projectsStyle";

const ProjectsView = (props) => {
  const { icons, projectsData } = props;
  console.log("icons:", icons);
  return (
    <ProjectsContainer className="projectsView">
      <ProjectsList className="projectsWrapper">
        {projectsData.map((project) => {
          const { id, name, image, github, url, description, tools } = project;
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
                </ProjectDemoLink>
                <ProjectDemoLink
                  href={url}
                  target="_blank"
                  className="projectDemoLink"
                >
                  <ProjectUrl>
                    {id === "newsweek" ? "NewsWeek Demo" : url}
                  </ProjectUrl>
                </ProjectDemoLink>
                <ProjectDescription className="projectDescription">
                  <span>{description}</span>{" "}
                  <ProjectDemoLink
                    href={github}
                    target="_blank"
                    color="#007199"
                  >
                    View code on GitHub.
                  </ProjectDemoLink>
                </ProjectDescription>
                <ProjectIconsList className="toolIcons">
                  {tools.map((tool) => {
                    return (
                      <ProjectIconsListItem className="toolIcon">
                        {icons[tool]
                          ? icons[tool].colored
                            ? icons[tool].colored
                            : icons[tool]
                          : null}
                      </ProjectIconsListItem>
                    );
                  })}
                </ProjectIconsList>
              </ProjectInformationContainer>
            </ProjectsListItem>
          );
        })}
      </ProjectsList>
    </ProjectsContainer>
  );
};

export default ProjectsView;
