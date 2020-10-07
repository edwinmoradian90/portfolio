import React from "react";
import {
  Hamburger,
  List,
  ListItem,
  ListItemHref,
  Logo,
  Navbar,
} from "../style/nav/navStyles";
import icons from "../../data/icons/icons";

const NavView = (props) => {
  const { toggleDropDownMenu } = props;
  return (
    <Navbar className="navView">
      <Logo to="/">EDWIN MORADIAN</Logo>
      <List className="navList">
        <ListItem to="/">ABOUT</ListItem>
        <ListItem to="/projects">PROJECTS</ListItem>
        <ListItem to="/writings">WRITING</ListItem>
        <ListItemHref href="mailto:edwin.moradian90@gmail.com">
          CONTACT
        </ListItemHref>
      </List>
      <Hamburger className="hamburger" onClick={toggleDropDownMenu}>
        {icons.hamburger}
      </Hamburger>
    </Navbar>
  );
};

export default NavView;
