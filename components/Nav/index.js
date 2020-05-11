import React from "react";
import style from "./style.scss";
import Link from "next/link";
import {
  faCat,
  faMagic,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <Link href="/">
          <div className={style.liquidContainer}>
            {/* <div className={style.liquidTop}></div>
            <div className={style.circle}></div>
            <img className={style.logo} src="/img/logo.svg" />
             */}
            
          </div>
        </Link>
        {/* <div className={style.linksContainer}>
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
        </div> */}
      </nav>
    );
  }
}

export default Navbar;
