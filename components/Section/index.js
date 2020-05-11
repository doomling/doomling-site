import React from "react";
import style from "./style.scss";

class Section extends React.Component {
  render() {
    return (
      <section className={this.props.shiny ? style.sectionContainerShiny : style.sectionContainer}>
        <div>
          <span className={style.sectionTitle}>{this.props.title}</span>
        </div>
        {this.props.children}
      </section>
    );
  }
}

export default Section;
