import React from "react";
import style from "./style.scss";
import Navbar from "../components/Nav";
import Section from "../components/Section";

class Index extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Section title="we are Elixir">
          <h1>Something clever about web & magic potions</h1>
        </Section>
      </div>
    );
  }
}

export default Index;
