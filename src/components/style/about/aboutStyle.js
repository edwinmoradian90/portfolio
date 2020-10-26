import styled from "styled-components";
import { Link } from "react-router-dom";
import { grey, mainBlue, compBlue } from "../colors/main";

const AboutContainer = styled.div`
  color: ${grey};
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 315px);
  padding: 2rem;
  @media (max-width: 769px) {
    flex-direction: column;
  }
`;

const About = styled.div`
  margin-right: 20px;
  width: 422px;
  @media (max-width: 769px) {
    width: 100%;
  }
`;

const Title = styled.h3`
  font-size: 25px;
  font-weight: 700;
  margin: 1em 0;
  opacity: 0.9;
`;

const AboutHref = styled.a`
  color: ${mainBlue};
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: ${compBlue};
  }
`;

const AboutLink = styled(Link)`
  color: ${mainBlue};
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: ${compBlue};
  }
`;

const AboutContact = styled.div``;

const AboutSummary = styled.p`
  font-family: "Merriweather", sans-serif;
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 0.01rem;
  line-height: 1.75rem;
  margin-bottom: 1rem;
`;

const ContactInformationList = styled.ul`
  @media (max-width: 769px) {
    display: flex;
    flex-direction: row;
    flex-flow: row wrap;
    flex-wrap: wrap;
    width: 100%;
  }
`;

const ContactInformationItem = styled.li`
  @media (max-width: 769px) {
    display: flex;
  }
`;

const ContactLinkWrapper = styled.a`
  align-items: center;
  color: ${grey};
  display: flex;
  text-decoration: none;
  &:hover {
    color: ${mainBlue};
  }
`;

const ContactIcon = styled.div`
  font-size: 30px;
  padding: 0 10px;
`;

const ContactUrl = styled.p`
  font-size: 14px;
`;

export {
  About,
  AboutContact,
  AboutContainer,
  AboutHref,
  AboutLink,
  AboutSummary,
  ContactIcon,
  ContactInformationItem,
  ContactInformationList,
  ContactLinkWrapper,
  ContactUrl,
  Title,
};
