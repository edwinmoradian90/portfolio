import React from "react";
import {
  Hamburger,
  List,
  ListItem,
  Logo,
  Navbar,
} from "../style/nav/navStyles";
import icons from "../../data/icons/icons";

const NavView = (props) => {
  const { dropDownMenu, toggleDropDownMenu } = props;
  return (
    <Navbar className="navView">
      <Logo>EDWIN MORADIAN</Logo>
      <List className="navList">
        <ListItem to="/">ABOUT</ListItem>
        <ListItem to="/projects">PROJECTS</ListItem>
        <ListItem to="/writings">WRITING</ListItem>
      </List>
      <Hamburger onClick={toggleDropDownMenu}>{icons.hamburger}</Hamburger>
    </Navbar>
  );
};

export default NavView;
