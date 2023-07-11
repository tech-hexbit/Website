import React from "react";

// components
import ImgCard from "./ImgCardAdv";

// Css
import ACss from "./Css/Advisors.module.css";

// img
import img1 from "./../../assets/Image 18.png";
import img2 from "./../../assets/Image 17.png";
import img3 from "./../../assets/Mayank Tiwari.png";

export default function Advisors() {
  return (
    <div className={ACss.mDIvAdvisors}>
      <p className={ACss.Advisors}>Advisors</p>
      <ImgCard img={img1} name="Badrinath Mishra" />
      <ImgCard img={img2} name="Dharmender Khanna" />
      <ImgCard img={img3} name="Mayank Tiwari" />
      <div className={ACss.backDaignolDivParent}>
        <div className={ACss.backDaignolDiv}></div>
      </div>
    </div>
  );
}
