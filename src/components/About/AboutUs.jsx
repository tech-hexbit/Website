import React from "react";
import { Link } from "react-router-dom";

import Title from "../Home/Title";

// Css
import AbCss from "./Css/AboutUs.module.css";

//images
import logo from "../../assets/AboutUs/ParaImage.png";
import img from "../../assets/AboutUs/aboutus.png";

export default function AboutUs() {
  return (
    <div className={AbCss.mainDiv}>
      <Title title="About Us" />
      <div className={AbCss.part1}>
        <div className={AbCss.left}>
          <img src={img} alt="" />
        </div>
        <div className={AbCss.right}>
          <div className={AbCss.head}>We are On a Mission</div>
          <div className={AbCss.aimDiv}>
            <div className={AbCss.aimHead}>We AIM TO : </div>
            <div className={AbCss.aimDesc}>
              Empower micro, small, and MSME’s for digital success{" "}
            </div>
          </div>
          <div className={AbCss.desc}>
            HEXBIT.IO is an attempt to create an open inclusive interoperable
            ecosystem to create opportunities for everyone It is an end-to-end
            integrated hybrid formula enabled by technology and human hands to
            enable enterprises across the products and services category to
            leverage the growing digital commerce markets.
          </div>
          <div className={AbCss.register}>
            <div className={AbCss.registerSvg}>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  opacity="0.01"
                  x="37"
                  y="37"
                  width="26"
                  height="26"
                  transform="rotate(-180 37 37)"
                  fill="#1A1A1A"
                />
                <path
                  d="M19.6667 28.5602V19.4385C19.6657 18.7035 20.0871 18.0334 20.7501 17.716C21.5364 17.3446 22.4656 17.4539 23.1442 17.9977L28.6692 22.5585C29.0871 22.9207 29.3271 23.4464 29.3271 23.9993C29.3271 24.5523 29.0871 25.078 28.6692 25.4402L23.1442 30.001C22.4656 30.5447 21.5364 30.6541 20.7501 30.2827C20.0871 29.9653 19.6657 29.2951 19.6667 28.5602Z"
                  fill="#BB14E2"
                />
                <circle
                  cx="24"
                  cy="24"
                  r="23"
                  stroke="#BB14E2"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className={AbCss.registerLink}>
              <Link to="/register" className="LinkStyle">
                Register With Us Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={AbCss.part2}>
        <div className={AbCss.part2Desc}>
          Hexbit.io Is a Revolutionary Full-Stack Solution. Enabling Sellers
          Across the Globe to Sell Online across Platforms and Networks
        </div>
        <div className={AbCss.part2Img}>
          <img src={logo} alt="" />
        </div>
      </div>
      {/* <div></div> */}
    </div>
  );
}
