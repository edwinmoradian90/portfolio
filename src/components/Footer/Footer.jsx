import React from "react";
import icons from "../../data/icons/icons";
import footerData from "../../data/footer/footer.json";
import {
  FooterContainer,
  FooterFlexWrapper,
  FooterIconList,
  FooterIconListItem,
  FooterName,
  FooterWrapper,
} from "../style/footer/footerStyle";

const Footer = (props) => {
  const { name, year } = footerData.text;
  const { urls } = footerData;
  const ids = ["linkedin", "github", "medium", "angellist", "email"];
  return (
    <FooterContainer className="footerView">
      <FooterWrapper className="footerWrapper">
        <FooterFlexWrapper className="footerNameWrapper">
          <FooterName className="footerName">{name}</FooterName>
          <span className="currentYear">{year}</span>
        </FooterFlexWrapper>
        <FooterIconList className="footerLinksList">
          {urls.map((url) => {
            return (
              <FooterIconListItem
                href={url.url}
                target={url.id === "email" ? "" : "_blank"}
                className="iconListItem"
              >
                {icons[url.id]}
              </FooterIconListItem>
            );
          })}
        </FooterIconList>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
