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
  const { toggleDropDownMenu, currentPage } = props;
  const { about, projects, writings } = currentPage;
  return (
    <Navbar className="navView">
      <Logo to="/">EDWIN MORADIAN</Logo>
      <List className="navList">
        <ListItem tabOn={about} id="about" to="/">
          ABOUT
        </ListItem>
        <ListItem tabOn={projects} id="projects" to="/projects">
          PROJECTS
        </ListItem>
        <ListItem tabOn={writings} id="writings" to="/writings">
          WRITINGS
        </ListItem>
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
