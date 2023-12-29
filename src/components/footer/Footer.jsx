import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

// css
import FCss from "./Css/Footer.module.css";

// img
import dss from "../../assets/dss.png";
import madeInIndia from "../../assets/madeInIndia.png";
import hexbitLogo from "../../assets/logo/HexbitLogo.png";
import twitter from "../../assets/socialMedia/twitter.png";
import facebook from "../../assets/socialMedia/facebook.png";
import instagram from "../../assets/socialMedia/instagram.png";

const Footer = () => {
  const [show, set] = useState(true);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.slice(0, 3) === "/me") {
      set(false);
    } else {
      set(true);
    }
  }, [location]);

  return (
    <div>
      {show ? (
        <>
          {/* Footer Top  */}
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
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
                <img src={twitter} alt="" />
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
        </>
      ) : (
        ""
      )}

      {/* Footer Bottom */}
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
