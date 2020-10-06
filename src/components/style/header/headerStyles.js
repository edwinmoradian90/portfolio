import styled from "styled-components";
import { grey, lightBlue, lightGrey, mainBlue, textGrey } from "../colors/main";

const HeaderContainer = styled.header`
  background: ${lightBlue};
  border-top: 1px solid ${lightGrey};
  border-bottom: 1px solid ${lightGrey};
  color: ${grey};
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

const Wrapper = styled.div``;

const Name = styled.h1`
  color: ${grey};
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 0.01 rem;
  margin-bottom: 0.5rem;
  opacity: 0.9;
  &:hover {
    color: ${mainBlue};
    cursor: pointer;
  }
`;

const Titles = styled.p`
  color: ${textGrey};
  font-family: "Merriweather", serif;
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 0.5rem;
`;

const Text = styled.p`
  color: ${textGrey};
  font-size: 20px;
`;

export { HeaderContainer, Name, Titles, Text, Wrapper };
