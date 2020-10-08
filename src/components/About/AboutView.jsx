import React from "react";
import {
  About,
  AboutContact,
  AboutContainer,
  AboutSummary,
  ContactIcon,
  ContactInformationItem,
  ContactInformationList,
  ContactLinkWrapper,
  ContactUrl,
  Title,
} from "../style/about/aboutStyle";

const AboutView = (props) => {
  const { aboutData, icons } = props;
  const { about, contact } = aboutData;
  return (
    <div className="aboutView">
      <AboutContainer className="aboutContainer">
        <About className="aboutMe">
          <Title className="aboutTitle">{about.title}</Title>
          <AboutSummary className="aboutSummary">{about.summary}</AboutSummary>
        </About>
        <AboutContact className="aboutContact">
          <Title className="aboutContactTitle">{contact.title} </Title>
          <ContactInformationList className="contactInformationList">
            {contact.urls.map((url, i) => {
              return (
                <ContactInformationItem
                  key={url.url}
                  className="contactInformationItem"
                >
                  <ContactLinkWrapper
                    href={url.url}
                    target={url.id === "email" ? "" : "_blank"}
                    className="contactLinkWrapper"
                  >
                    <ContactIcon className="contactIcon">
                      {icons[url.id]}
                    </ContactIcon>
                    <ContactUrl>{url.name}</ContactUrl>
                  </ContactLinkWrapper>
                </ContactInformationItem>
              );
            })}
          </ContactInformationList>
        </AboutContact>
      </AboutContainer>
    </div>
  );
};

export default AboutView;
