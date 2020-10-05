import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import HeaderView from "./HeaderView";
import aboutHeaderData from "../../data/header/about.json";
import projectsHeaderData from "../../data/header/projects.json";
import writingsHeaderData from "../../data/header/writings.json";

const Header = (props) => {
  const path = props.location.pathname;
  const [data, setData] = useState({
    data: aboutHeaderData,
  });
  useEffect(() => {
    const dataSelector = () => {
      let data = "";
      switch (path) {
        case "/":
          data = aboutHeaderData;
          break;
        case "/projects":
          data = projectsHeaderData;
          break;
        case "/writings":
          data = writingsHeaderData;
          break;
        default:
          data = aboutHeaderData;
          break;
      }
      return data;
    };
    setData({
      data: dataSelector(),
    });
  }, [path]);
  return (
    <div className="header">
      <HeaderView data={data} />
    </div>
  );
};

export default withRouter(Header);
