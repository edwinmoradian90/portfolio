import styled from "styled-components";
import { Link } from "react-router-dom";
import { grey, lightBlue, mainBlue } from "../colors/main";

const Navbar = styled.section`
  align-items: center;
  display: flex;
  height: 55px;
  justify-content: space-between;
  letter-spacing: 0.2em;
  line-height: 1.75rem;
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

const ListItem = styled(Link)`
  box-sizing: border-box;
  color: ${grey};
  font-size: 0.75rem;
  font-weight: 700;
  padding: 13px 20px;
  text-decoration: none;
  &:hover {
    background: ${lightBlue};
    color: ${mainBlue};
  }
`;

export { Navbar, List, ListItem, Logo };
