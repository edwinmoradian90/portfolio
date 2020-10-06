import styled from "styled-components";
import { lightGrey, mainBlue, textGrey } from "../colors/main";

const FooterContainer = styled.footer`
  border-top: 1px solid ${lightGrey};
  box-sizing: border-box;
  bottom: 0;
  padding: 10px 0px;
  position: fixed;
`;

const FooterWrapper = styled.div`
  align-items: center;
  color: ${textGrey};
  display: flex;
  font-size: 0.75rem;
  justify-content: space-between;
  width: 100vw;
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

const FooterIconListItem = styled.li`
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
