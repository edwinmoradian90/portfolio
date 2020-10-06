import styled from "styled-components";
import { lightGrey, mainBlue, textGrey, white } from "../colors/main";

const FooterContainer = styled.footer`
  background: ${white};
  border-top: 1px solid ${lightGrey};
  box-sizing: border-box;
  padding: 10px 0px;
  width: 100%;
  z-index: 10;
`;

const FooterWrapper = styled.div`
  align-items: center;
  color: ${textGrey};
  display: flex;
  font-size: 0.75rem;
  justify-content: space-between;
`;

const FooterFlexWrapper = styled.div`
  display: flex;
  padding-left: 20px;
`;

const FooterName = styled.p`
  margin-right: 10px;
`;

const FooterIconList = styled.ul`
  display: flex;
  padding-right: 20px;
`;

const FooterIconListItem = styled.a`
  color: inherit;
  font-size: 1.333em;
  margin-left: 10px;
  &:hover {
    color: ${mainBlue};
    cursor: pointer;
  }
`;

export {
  FooterContainer,
  FooterFlexWrapper,
  FooterIconList,
  FooterIconListItem,
  FooterName,
  FooterWrapper,
};
