import React from "react";
import Header from "../Header/Header";
import WritingsView from "./WritingsView";

const Writings = (props) => {
  return (
    <section className="writings">
      <Header />
      <WritingsView />
    </section>
  );
};

export default Writings;
