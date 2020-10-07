import React from "react";
import {
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
} from "../style/writings/writingsStyle";

const WritingsView = (props) => {
  const { icons, writingsData } = props;
  console.log("icons:", icons);
  return (
    <WritingsContainer className="writingsView">
      <WritingsList className="writingsWrapper">
        {writingsData.map((writing) => {
          const { id, name, image, description, date, url } = writing;
          return (
            <WritingsListItem className="projectContainer">
              <WritingImage src={image} alt={id} />
              <WritingInformationContainer className="projectInformationContainer">
                <WritingDemoLink
                  href={url}
                  target="_blank"
                  className="projectDemoLink"
                >
                  <WritingName className="projectName">{name}</WritingName>
                  <WritingUrl>{url}</WritingUrl>
                </WritingDemoLink>
                <WritingDescription className="projectDescription">
                  <span>{description}</span>{" "}
                </WritingDescription>
                <WritingDate>
                  <DateIconWrapper>{icons.calendar}</DateIconWrapper>
                  {date}
                </WritingDate>
              </WritingInformationContainer>
            </WritingsListItem>
          );
        })}
      </WritingsList>
    </WritingsContainer>
  );
};

export default WritingsView;
