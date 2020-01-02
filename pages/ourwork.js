import React from "react";
import style from "./style.scss";
import Navbar from "../components/Nav";
import Section from "../components/Section";
import CaseStudy from "../components/CaseStudy"

let studies = [1,2,3,4,5,6,7,8,9]

class Index extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Navbar />
        <Section title="Our Work">
          <div className={style.grid}>
            {studies.map((item, i) => {
              return <CaseStudy title={item} key={i} />
            })}
          </div>
        </Section>
      </div>
    );
  }
}

export default Index;
