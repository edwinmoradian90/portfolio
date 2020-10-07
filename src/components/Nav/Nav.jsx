import React, { useState } from "react";
import NavView from "./NavView";
import {
  DropDownMenu,
  DropDownListItem,
  DropDownListItemHref,
} from "../style/nav/navStyles";

const Nav = () => {
  const [dropDownMenu, setDropDownMenu] = useState(false);
  const toggleDropDownMenu = () => {
    setDropDownMenu(!dropDownMenu);
  };
  return (
    <div className="nav">
      <NavView
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

export default Nav;
