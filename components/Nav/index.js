import React from "react";
import style from "./style.scss";
import Link from "next/link";

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <Link href="/">
          <img className={style.logo} src="/img/logo.svg" />
        </Link>
        <div className={style.linksContainer}>
          <li>
            <Link href="/services">
              <a>Services</a>
            </Link>
          </li>
          <li>
            <Link href="/ourwork">
              <a>Our Work</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </div>
      </nav>
    );
  }
}

export default Navbar;
