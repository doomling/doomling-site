import React from "react";
import style from "./style.scss";

class Logo extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.potionTop}>
          <div className={style.potionTopLine}></div>
        </div>
        <div className={style.potionNeck}></div>
        <div className={style.potionBody}>
          <div className={style.potionContent}>
            <div className={style.liquidTop}></div>
            <div className={style.blobContainer}>
              <div className={style.blobOne}></div>
              <div className={style.blobTwo}></div>
              <div className={style.blobThree}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Logo;
