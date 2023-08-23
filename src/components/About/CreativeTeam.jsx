import React from "react";

import CreativeCard from "./CreativeCard";

import CTCss from "./Css/CreativeTeam.module.css";

import mem1 from "../../assets/AboutUS/creativeTeam/mem1.png";
import mem2 from "../../assets/AboutUS/creativeTeam/mem2.png";

export default function CreativeTeam() {
  return (
    <div className={CTCss.mainDiv}>
      <div className={CTCss.left}>
        <div className={CTCss.head}>Meet members of our creative team</div>
        <div className={CTCss.subHead}>
          We work to create the most attractive meaningful Place for businesses.
          Our Team always ready to help you.
        </div>
        <div className={CTCss.details}>
          <div className={CTCss.points}>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M11.0545 32L8.29091 27.1238L3.05455 25.9048L3.56364 20.2667L0 16L3.56364 11.7333L3.05455 6.09524L8.29091 4.87619L11.0545 0L16 2.20952L20.9455 0L23.7091 4.87619L28.9455 6.09524L28.4364 11.7333L32 16L28.4364 20.2667L28.9455 25.9048L23.7091 27.1238L20.9455 32L16 29.7905L11.0545 32ZM14.4727 21.4095L22.6909 12.8L20.6545 10.5905L14.4727 17.0667L11.3455 13.8667L9.30909 16L14.4727 21.4095Z"
                  fill="#BB14E2"
                />
              </svg>
            </div>
            <div className={CTCss.text}>
              A team consisting of skilled members
            </div>
          </div>
          <div className={CTCss.points}>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M11.0545 32L8.29091 27.1238L3.05455 25.9048L3.56364 20.2667L0 16L3.56364 11.7333L3.05455 6.09524L8.29091 4.87619L11.0545 0L16 2.20952L20.9455 0L23.7091 4.87619L28.9455 6.09524L28.4364 11.7333L32 16L28.4364 20.2667L28.9455 25.9048L23.7091 27.1238L20.9455 32L16 29.7905L11.0545 32ZM14.4727 21.4095L22.6909 12.8L20.6545 10.5905L14.4727 17.0667L11.3455 13.8667L9.30909 16L14.4727 21.4095Z"
                  fill="#BB14E2"
                />
              </svg>
            </div>
            <div className={CTCss.text}>
              We are available 24/7 for your support.
            </div>
          </div>
        </div>
      </div>
      <div className={CTCss.right}>
        <CreativeCard
          img={mem1}
          name="Rishabh Kant"
          designation="Project Manager"
        />
        <CreativeCard
          img={mem2}
          name="Abhishek Pathak"
          designation="Director, Operations"
        />
      </div>
    </div>
  );
}
