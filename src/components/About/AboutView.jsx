import React from "react";

const AboutView = (props) => {
  const { aboutData } = props;
  const { about, contact } = aboutData.data;
  return (
    <div className="aboutView">
      <div className="aboutContainer">
        <div className="aboutMe">
          <h3 className="aboutTitle">{about.title}</h3>
          <p className="aboutText">{about.summary}</p>
        </div>
        <div className="aboutContact">
          <h3 className="aboutContactTitle">{contact.title} </h3>
          <ul className="contactInformationList">
            {contact.urls.map((url) => {
              return (
                <li className="contactInformationItem">
                  <div className="contactLinkWrapper">
                    <div className="contactIcon">{url.icon}</div>
                    <a href={url.url} className="contactLink">
                      {url.name}
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutView;
