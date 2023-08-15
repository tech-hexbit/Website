import React from "react";
import { Link } from "react-router-dom";

import Title from "../Home/Title";

// Css
import AbCss from "./Css/AboutUs.module.css";

//images
import logo from "../../assets/AboutUS/ParaImage.png";
import img from "../../assets/AboutUS/aboutus.png";
import buyer1 from "../../assets/AboutUS/companies/buyer/company1.png";
import buyer2 from "../../assets/AboutUS/companies/buyer/company2.png";
import buyer3 from "../../assets/AboutUS/companies/buyer/company3.png";
import buyer4 from "../../assets/AboutUS/companies/buyer/company4.png";
import buyer5 from "../../assets/AboutUS/companies/buyer/company5.png";
import buyer6 from "../../assets/AboutUS/companies/buyer/company6.png";
import logistics1 from "../../assets/AboutUS/companies/logistics/company1.png";
import logistics2 from "../../assets/AboutUS/companies/logistics/company2.png";
import logistics3 from "../../assets/AboutUS/companies/logistics/company3.png";
import logistics4 from "../../assets/AboutUS/companies/logistics/company4.png";
import logistics5 from "../../assets/AboutUS/companies/logistics/company5.png";
import logistics6 from "../../assets/AboutUS/companies/logistics/company6.png";

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
      <div className={AbCss.part3}>
        <div className={AbCss.part3Top}>
          <div className={AbCss.topHead}>
            Healthy Pipeline of Network Participants (Via ONDC)
          </div>
          <div className={AbCss.topSubHead}>
            Unlocking the power of ONDC: Forge ahead with an abundant network of
            industry giants, turbocharging your sales and elevating your journey
            to excellence!
          </div>
          <div></div>
        </div>
        <div className={AbCss.part3Bottom}>
          <div className={AbCss.buyer}>
            <div className={AbCss.blHead}>Buyer Side</div>
            <div className={AbCss.blImages}>
              <div className={AbCss.img}>
                <img src={buyer1} alt="" />
              </div>
              <div className={AbCss.img}>
                <img src={buyer2} alt="" />
              </div>
              <div className={AbCss.img}>
                <img src={buyer3} alt="" />
              </div>
              <div className={AbCss.img}>
                <img src={buyer4} alt="" />
              </div>
              <div className={AbCss.img}>
                <img src={buyer5} alt="" />
              </div>
              <div className={AbCss.img} id={AbCss.yatraDiv}>
                <img src={buyer6} alt="" id={AbCss.yatra} />
              </div>
            </div>
          </div>
          <div className={AbCss.logistics}>
            <div className={AbCss.blHead}>Logistics Side</div>
            <div className={AbCss.blImages}>
              <div className={AbCss.img}>
                <img src={logistics1} alt="" />
              </div>
              <div className={AbCss.img}>
                <img src={logistics2} alt="" />
              </div>
              <div className={AbCss.img}>
                <img src={logistics3} alt="" />
              </div>
              <div className={AbCss.img}>
                <img src={logistics4} alt="" />
              </div>
              <div className={AbCss.img}>
                <img src={logistics5} alt="" />
              </div>
              <div className={AbCss.img}>
                <img src={logistics6} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={AbCss.part2}>
        <div className={AbCss.part2Desc}>
          <div>
            <span>Hexbit.io</span> Is a{" "}
            <span>Revolutionary Full-Stack Solution</span>, Enabling{" "}
            <span>Sellers</span> Across the Globe <span>to Sell Online</span>{" "}
            across <span>Platforms and Networks</span>
          </div>
        </div>
        <div className={AbCss.part2Img}>
          <img src={logo} alt="" />
        </div>
      </div>
      {/* <div></div> */}
    </div>
  );
}
