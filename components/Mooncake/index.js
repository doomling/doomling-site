import React from "react";
import style from "./style.scss";

class Mooncake extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.antennaeContainer}>
          <div className={style.antennaeLeft}>
            <div className={style.antennaeTip}></div>
          </div>
          <div className={style.antennaeRight}>
            <div className={style.antennaeTip}></div>
          </div>
        </div>
        <div className={style.body}>
          <div className={style.glow}>
            <div className={style.glowCircle}></div>
            <div className={style.glowDot}></div>
          </div>
          <div className={style.shine}></div>
          <div className={style.eyeOuter}>
            <div className={style.eyeInner}>
              <div className={style.eyeShine}></div>
              <div className={style.eyeShineSmaller}></div>
              <div className={style.eyelids}></div>
            </div>
          </div>
          <div className={style.mouth}></div>
          <div className={style.eyeOuter}>
            <div className={style.eyeInner}>
              <div className={style.eyeShine}></div>
              <div className={style.eyeShineSmaller}></div>
              <div className={style.eyelids}></div>
            </div>
          </div>
        </div>
        <div className={style.feetContainer}>
          <div className={style.feetRight}></div>
          <div className={style.feetLeft}></div>
        </div>
      </div>
    );
  }
}

export default Mooncake;
