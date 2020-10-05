import React from "react";
import { Navbar, List, ListItem, Logo } from "../style/nav/navStyles";

const NavView = (props) => {
  return (
    <Navbar className="navView">
      <Logo>EDWIN MORADIAN</Logo>
      <List className="navList">
        <ListItem>ABOUT</ListItem>
        <ListItem>PROJECTS</ListItem>
        <ListItem>WRITING</ListItem>
      </List>
    </Navbar>
  );
};

export default NavView;
