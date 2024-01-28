import React from "react";
import star from './../../assets/Vector.png'
//css
import SRCss from'./Css/StarRating.module.css'


export default function StarRating(props) {
  return (
    <>
        <div className={SRCss.container}>
            <p>{props.label} star</p>
            <p>{props.count}</p>
        </div>
        <div className={SRCss.outer}>
            <div className={SRCss.inner}></div>
        </div>
        </>
  );
}
