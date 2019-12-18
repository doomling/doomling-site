import React from "react";
import style from "./style.scss";
import Navbar from "../components/Nav";
import Section from "../components/Section";

class Index extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Section title="Our Work"></Section>
      </div>
    );
  }
}

export default Index;
