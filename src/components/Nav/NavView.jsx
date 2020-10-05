import React from "react";
import { Navbar, List, ListItem, Logo } from "../style/nav/navStyles";

const NavView = (props) => {
  return (
    <Navbar className="navView">
      <Logo>EDWIN MORADIAN</Logo>
      <List className="navList">
        <ListItem to="/">ABOUT</ListItem>
        <ListItem to="/projects">PROJECTS</ListItem>
        <ListItem to="/writings">WRITING</ListItem>
      </List>
    </Navbar>
  );
};

export default NavView;
