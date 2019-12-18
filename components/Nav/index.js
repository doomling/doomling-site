import React from "react";
import style from "./style.scss";

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <img className={style.logo} src="/img/logo.svg" />
      </nav>
    );
  }
}

export default Navbar;
