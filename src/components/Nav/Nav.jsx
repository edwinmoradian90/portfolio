import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import NavView from "./NavView";
import {
  DropDownMenu,
  DropDownListItem,
  DropDownListItemHref,
} from "../style/nav/navStyles";

const Nav = (props) => {
  const [dropDownMenu, setDropDownMenu] = useState(false);
  const [pathName, setPathName] = useState(props.location.pathname);
  const [currentPage, setCurrentPage] = useState({
    about: true,
    projects: false,
    writings: false,
  });
  const currentTab = {
    "/": "about",
    "/projects": "projects",
    "/writings": "writings",
  };
  const toggleDropDownMenu = () => {
    setDropDownMenu(!dropDownMenu);
  };
  const selectedTab = () => {
    const newTab = {
      about: false,
      projects: false,
      writings: false,
      [currentTab[pathName]]: true,
    };
    setCurrentPage(newTab);
  };

  useEffect(() => {
    setPathName(props.location.pathname);
    selectedTab();
  }, [pathName, props.location.pathname]);
  return (
    <div className="nav">
      <NavView
        currentPage={currentPage}
        dropDownMenu={dropDownMenu}
        toggleDropDownMenu={toggleDropDownMenu}
      />
      <DropDownMenu className="dropDownMenu" dropDownMenu={dropDownMenu}>
        <DropDownListItem onClick={toggleDropDownMenu} to="/">
          ABOUT
        </DropDownListItem>
        <DropDownListItem onClick={toggleDropDownMenu} to="/projects">
          PROJECTS
        </DropDownListItem>
        <DropDownListItem onClick={toggleDropDownMenu} to="/writings">
          WRITINGS
        </DropDownListItem>
        <DropDownListItemHref
          onClick={toggleDropDownMenu}
          href="mailto:edwin.moradian90@gmail.com"
        >
          CONTACT
        </DropDownListItemHref>
      </DropDownMenu>
    </div>
  );
};

export default withRouter(Nav);
