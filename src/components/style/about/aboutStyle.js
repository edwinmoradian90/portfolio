import styled from "styled-components";
import { grey, mainBlue } from "../colors/main";

const AboutContainer = styled.div`
  color: ${grey};
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

const About = styled.div`
  margin-right: 20px;
  width: 422px;
`;

const Title = styled.h3`
  font-size: 25px;
  font-weight: 700;
  margin: 1em 0;
  opacity: 0.9;
`;

const AboutContact = styled.div`
  width: 160px;
`;

const AboutSummary = styled.p`
  font-family: "Merriweather", sans-serif;
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 0.01rem;
  line-height: 1.75rem;
  margin-bottom: 1rem;
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
  AboutSummary,
  ContactIcon,
  ContactLinkWrapper,
  ContactUrl,
  Title,
};
