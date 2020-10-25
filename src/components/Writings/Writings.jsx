import React from "react";
import icons from "../../data/icons/icons";
import writingsData from "../../data/writings/writings";
import Header from "../Header/Header";
import WritingsView from "./WritingsView";

const Writings = () => {
  return (
    <section className="writings">
      <Header />
      <WritingsView icons={icons} writingsData={writingsData} />
    </section>
  );
};

export default Writings;
