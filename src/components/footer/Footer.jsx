import React from "react";
import { Link } from "react-router-dom";

// css
import dss from "../../assets/dss.png";
import FCss from "./Css/Footer.module.css";

// img
import madeInIndia from "../../assets/madeInIndia.png";
import hexbitLogo from "../../assets/logo/HexbitLogo.png";
import twitter from "../../assets/socialMedia/twitter.png";
import facebook from "../../assets/socialMedia/facebook.png";
import instagram from "../../assets/socialMedia/instagram.png";

const Footer = () => {
  return (
    <div>
      <div className={FCss.mDiv}>
        <div className={FCss.leftDiv}>
          <div className={FCss.image}>
            <img src={hexbitLogo} alt="" />
          </div>
          <div className={FCss.address}>
            98C Main Road, Khanpur MB Road, Delhi 110062 <br />
            INDIA
          </div>
          <div className={FCss.socialMedia}>
            {/* FaceBook */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-facebook"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>

            {/* Insta */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-instagram"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>

            <svg
              version="1.1"
              id="svg5"
              xmlns:svg="http://www.w3.org/2000/svg"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 1668.56 1221.19"
              style="enable-background:new 0 0 1668.56 1221.19;"
              xml:space="preserve"
            >
              <g id="layer1" transform="translate(52.390088,-25.058597)">
                <path
                  id="path1009"
                  d="M283.94,167.31l386.39,516.64L281.5,1104h87.51l340.42-367.76L984.48,1104h297.8L874.15,558.3l361.92-390.99
		h-87.51l-313.51,338.7l-253.31-338.7H283.94z M412.63,231.77h136.81l604.13,807.76h-136.81L412.63,231.77z"
                />
              </g>
            </svg>
          </div>
          <div className={FCss.button}>
            <button>
              <Link
                to="/contact"
                className="LinkStyle"
                style={{ color: "white" }}
              >
                Contact Us
              </Link>
            </button>
          </div>
        </div>
        <div className={FCss.rightDiv}>
          <div>
            <p className={FCss.AboutCompany}>
              <b>Pages</b>
            </p>
            <ul className={FCss.ful}>
              <li>
                <Link to="/AboutUs" className="LinkStyle">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/terms" className="LinkStyle">
                  Return Policy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="LinkStyle">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/terms" className="LinkStyle">
                  Refund & Cancellation Policies
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className={FCss.AboutCompany}>
              <b>ONDC</b>
            </p>
            <ul className={FCss.ful}>
              <li>
                <Link to="/" className="LinkStyle">
                  About ONDC
                </Link>
              </li>
              <li>
                <Link to="/" className="LinkStyle">
                  Sell on ONDC
                </Link>
              </li>
              <li>
                <Link to="/" className="LinkStyle">
                  ONDC Components
                </Link>
              </li>
              <li>
                <Link to="/" className="LinkStyle">
                  ONDC Debugger
                </Link>
              </li>
              <li>
                <Link to="/" className="LinkStyle">
                  TSP For ONDC
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={FCss.bottomDiv}>
        <div className={FCss.footerImage}>
          <img src={madeInIndia} alt="" />
          <img src={dss} alt="" />
        </div>
        <div className={FCss.rights}>
          <span>
            <Link to="/terms" className="LinkStyle" style={{ color: "white" }}>
              Terms & condition
            </Link>
          </span>{" "}
          ||{" "}
          <span>
            <Link
              to="/privacy"
              className="LinkStyle"
              style={{ color: "white" }}
            >
              Privacy Policy
            </Link>
          </span>
        </div>
        <div className={FCss.rights}>© Hexbit. All Rights Reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
