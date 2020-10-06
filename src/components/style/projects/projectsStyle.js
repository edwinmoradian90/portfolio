import styled from "styled-components";
import { compBlue, grey, lightGrey, mainBlue } from "../colors/main";

const ProjectsContainer = styled.section`
  color: ${grey};
  display: flex;
  font-family: "Merriweather", sans-serif;
  justify-content: center;
  overflow-x: none;
  width: 100%;
`;

const ProjectsList = styled.ul`
  box-sizing: border-box;
  max-width: 38em;
  padding: 2rem;
`;

const ProjectsListItem = styled.li`
  border-bottom: 1px solid ${lightGrey};
  box-sizing: border-box;
  display: flex;
  height: 300px;
  justify-content: center;
  padding: 2rem 0;
`;

const ProjectImage = styled.img`
  height: 150px;
  padding: 0 1rem;
  width: 150px;
`;

const ProjectInformationContainer = styled.div``;

const ProjectDemoLink = styled.a`
  color: inherit;
  text-decoration: none;
`;

const ProjectName = styled.h2`
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 1.25;
  margin-bottom: 0.75rem;
  opacity: 0.9;
  &:hover {
    color: ${compBlue};
  }
`;

const ProjectUrl = styled.p`
  color: ${mainBlue};
  font-size: 0.75rem;
  letter-spacing: 0.01rem;
  line-height: 1.75rem;
  &:hover {
    color: ${compBlue};
  }
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  margin-top: 0.75rem;
  letter-spacing: 0.01rem;
  line-height: 1.75rem;
`;

export {
  ProjectsContainer,
  ProjectDemoLink,
  ProjectDescription,
  ProjectImage,
  ProjectInformationContainer,
  ProjectsList,
  ProjectsListItem,
  ProjectName,
  ProjectUrl,
};
