import React, { useState } from "react";
import NavView from "./NavView";
import { DropDownMenu, DropDownListItem } from "../style/nav/navStyles";

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
      <DropDownMenu dropDownMenu={dropDownMenu}>
        <DropDownListItem onClick={toggleDropDownMenu} to="/">
          ABOUT
        </DropDownListItem>
        <DropDownListItem onClick={toggleDropDownMenu} to="/projects">
          PROJECTS
        </DropDownListItem>
        <DropDownListItem onClick={toggleDropDownMenu} to="/writings">
          WRITINGS
        </DropDownListItem>
      </DropDownMenu>
    </div>
  );
};

export default Nav;
