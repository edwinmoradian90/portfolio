import styled from "styled-components";
import { grey, lightBlue, lightGrey, mainBlue, textGrey } from "../colors/main";

const HeaderContainer = styled.header`
  background: ${lightBlue};
  border-bottom: 1px solid ${lightGrey};
  color: ${grey};
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

const Wrapper = styled.div``;

const Name = styled.h1`
  font-size: 45px;
  font-weight: 700;
  margin-bottom: 10px;
  &:hover {
    color: ${mainBlue};
    cursor: pointer;
  }
`;

const Titles = styled.p`
  color: ${textGrey};
`;

const Text = styled.p`
  color: ${textGrey};
  font-size: 20px;
`;

export { HeaderContainer, Name, Titles, Text, Wrapper };
