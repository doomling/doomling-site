import React from "react";
import style from "./style.scss";
import Navbar from "../components/Nav";
import Section from "../components/Section";

class Index extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Section title="let's work together">
          <div>
            <input />
            <input />
            <textarea />
          </div>
        </Section>
      </div>
    );
  }
}

export default Index;
