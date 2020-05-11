import React from "react";
import style from "./style.scss";

class Spinel extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.headShadow}></div>
        <div className={style.head}>
          <div className={style.eyeRight}>
            <div className={style.eyeLight}></div>
          </div>
          <div className={style.eyeLeft}>
            <div className={style.eyeLight}></div>
          </div>
          <div className={style.nose}></div>
          <div className={style.mouthRight}></div>
          <div className={style.mouthTopLeft}></div>
          <div className={style.mouth}>
            <div className={style.mouthShadow}></div>
          </div>
        </div>
        <div className={style.earRight}>
          <div className={style.innerEarRight}></div>
        </div>
        <div className={style.earLeft}>
          <div className={style.innerEarLeft}></div>
        </div>
        <div className={style.bodyShadow}></div>
        <div className={style.body}>
          <div className={style.shoulderRight}></div>
          <div className={style.shoulderLeft}></div>
          <div className={style.bodyBase}></div>
          <div className={style.legLeft}></div>
          <div className={style.legRight}></div>
          <div className={style.armLeft}></div>
          <div className={style.armRight}></div>
        </div>
        <div className={style.wingContainer}>
          <div className={style.wingLeft}>
            <div className={style.wingLeft1}></div>
            <div className={style.wingLeft3}></div>
          </div>
          <div className={style.wingRight}>
            <div className={style.wingRight1}></div>
            <div className={style.wingRight3}></div>
          </div>
          <div className={style.tailContainer}>
            <div className={style.tail}></div>
            <div className={style.tailSmall}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Spinel;
