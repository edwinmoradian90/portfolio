import styled from "styled-components";
import { compBlue, grey, lightGrey, mainBlue, textGrey } from "../colors/main";

const WritingsContainer = styled.section`
  color: ${grey};
  display: flex;
  font-family: "Merriweather", sans-serif;
  justify-content: center;
  overflow-x: none;
  width: 100%;
`;

const WritingsList = styled.ul`
  box-sizing: border-box;
  max-width: 60em;
  padding: 2rem;
  @media (max-width: 769px) {
    padding: 2rem 0;
  }
`;

const WritingsListItem = styled.li`
  border-bottom: 1px solid ${lightGrey};
  box-sizing: border-box;
  display: flex;
  height: auto;
  justify-content: center;
  padding: 2rem 0;
  &:last-child {
    border-bottom: 0;
  }
  @media (max-width: 769px) {
    align-items: center;
    flex-direction: column;
    height: auto;
  }
`;

const WritingImage = styled.img`
  height: 200px;
  padding: 0 1rem;
  width: 300px;
  @media (max-width: 769px) {
    height: 200px;
    margin-bottom: 20px;
    padding: 0;
    width: 300px;
  }
`;

const WritingInformationContainer = styled.div`
  margin: 0 10px;
  width: 300px;
`;

const WritingDemoLink = styled.a`
  color: ${(props) => (props.color ? props.color : "inherit")};
  text-decoration: none;
  &:hover {
    color: ${mainBlue};
  }
`;

const WritingName = styled.h2`
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  opacity: 0.9;
  &:hover {
    color: ${compBlue};
  }
`;

const WritingUrl = styled.p`
  color: ${mainBlue};
  font-size: 0.75rem;
  letter-spacing: 0.01rem;
  line-height: 1.75rem;
  width: auto;
  &:hover {
    color: ${compBlue};
  }
`;

const WritingDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  margin-top: 0.75rem;
  letter-spacing: 0.01rem;
  line-height: 1.75rem;
`;

const WritingDate = styled.div`
  align-items: center;
  color: ${textGrey};
  display: flex;
  font-size: 10px;
  margin-top: 20px;
`;

const DateIconWrapper = styled.div`
  margin-right: 5px;
`;

export {
  DateIconWrapper,
  WritingsContainer,
  WritingDate,
  WritingDemoLink,
  WritingDescription,
  WritingImage,
  WritingInformationContainer,
  WritingsList,
  WritingsListItem,
  WritingName,
  WritingUrl,
};
