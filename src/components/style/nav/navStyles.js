import styled, { keyframes, css } from "styled-components";
import { Link } from "react-router-dom";
import { grey, lightBlue, lightGrey, mainBlue, white } from "../colors/main";

const dropDown = keyframes`
  from {height: 0px}
  to {height: auto}
`;

const pullUp = keyframes`
  from {height: auto}
  to {height: 0px}
`;

const Navbar = styled.section`
  align-items: center;
  color: ${grey};
  display: flex;
  height: 55px;
  justify-content: space-between;
  letter-spacing: 0.2em;
  line-height: 1.75rem;
  width: 100%;
`;

const Logo = styled(Link)`
  color: inherit;
  font-size: inherit;
  font-weight: 700;
  padding: 13px 20px;
  text-decoration: none;
`;

const List = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  text-decoration: none;
  @media (max-width: 769px) {
    display: none;
  }
`;

const ListItem = styled(Link)`
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

const ListItemHref = styled.a`
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

const Hamburger = styled.div`
  color: inherit;
  display: none;
  font-size: 30px;
  padding: 11px 20px;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 769px) {
    display: block;
  }
`;

const DropDownMenu = styled.div`
  display: ${(props) => (props.dropDownMenu ? "flex" : "none")};
  flex-direction: column;
  height: ${(props) => (props.dropDownMenu ? "auto" : "0px")};
  width: 100%;
  z-index: 10;
  @media (min-width: 769px) {
    display: none;
  }
`;

const DropDownListItem = styled(Link)`
  background: ${white};
  border-top: 1px solid ${lightGrey};
  color: inherit;
  font-family: Montserrat, helvetica neue, Helvetica, Arial, sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  padding: 20px 20px;
  text-decoration: none;
  &:hover {
    background: ${lightBlue};
    color: ${mainBlue};
    cursor: pointer;
  }
`;

const DropDownListItemHref = styled.a`
  background: ${white};
  border-top: 1px solid ${lightGrey};
  color: inherit;
  font-family: Montserrat, helvetica neue, Helvetica, Arial, sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  padding: 20px 20px;
  text-decoration: none;
  &:hover {
    background: ${lightBlue};
    color: ${mainBlue};
    cursor: pointer;
  }
`;

export {
  DropDownMenu,
  DropDownListItem,
  DropDownListItemHref,
  Hamburger,
  List,
  ListItem,
  ListItemHref,
  Logo,
  Navbar,
};
