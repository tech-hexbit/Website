import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import style from "./Slider.module.css";

export default function Slider(props) {
  return (
    <Carousel>
      <div className={style.sliderMainDiv}>
        <img src={props.img1} />
        <p className="legend" id={style.legend}>
          <div className={style.head}>{props.head[0]}</div>
          <div className={style.subHead}>{props.subHead[0]}</div>
        </p>
      </div>
      <div>
        <img src={props.img2} />
        <p className="legend">
          <div className={style.head}>{props.head[1]}</div>
          <div className={style.subHead}>{props.subHead[1]}</div>
        </p>
      </div>
      <div>
        <img src={props.img3} />
        <p className="legend">
          <div className={style.head}>{props.head[2]}</div>
          <div className={style.subHead}>{props.subHead[2]}</div>
        </p>
      </div>
    </Carousel>
  );
}
