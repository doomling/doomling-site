import React from "react";
import style from "./style.scss";

class CaseStudy extends React.Component {
  render() {
    return (
      <div className={style.caseContainer}>
        <span>{this.props.title}</span>
      </div>
    );
  }
}

export default CaseStudy;
