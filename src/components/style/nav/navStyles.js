import styled from "styled-components";
import { grey, lightGrey, mainBlue } from "../colors/main";

const Navbar = styled.section`
  align-items: center;
  border-bottom: 1px solid ${lightGrey};
  display: flex;
  height: 50px;
  justify-content: space-between;
  letter-spacing: 0.2em;
  width: 100vw;
`;

const Logo = styled.div`
  font-size: inherit;
  font-weight: 700;
  padding: 20px 20px;
`;

const List = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  text-decoration: none;
`;

const ListItem = styled.li`
  color: ${grey};
  font-size: 0.75rem;
  padding: 20px 20px;
  &:hover {
    color: ${mainBlue};
  }
`;

export { Navbar, List, ListItem, Logo };
