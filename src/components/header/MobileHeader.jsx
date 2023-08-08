import React, { useState } from "react";
import { Link } from "react-router-dom";

// css
import style from "./MobileHeader.module.css";

import imgLogo from "./../../assets/logo/Hexbit 2.png";

const MobileHeader = () => {
  const [count, setCount] = useState(false);

  return (
    <div className={style.mobileNav}>
      <nav
        className={style.logoSign}
        id={count ? style.logoVisible : style.logoNotVisible}
      >
        <div className={style.navToggleDiv}>
          {count ? (
            <div onClick={() => setCount(false)}>
              <p className={style.cancel}>X</p>
            </div>
          ) : (
            <div className={style.hamburger} onClick={() => setCount(true)}>
              <div id={style.bur1}></div>
              <div id={style.bur2}></div>
              <div id={style.bur3}></div>
            </div>
          )}
        </div>

        <Link to="/" className="LinkStyle" onClick={() => setCount(false)}>
          <div className={style.navHeadImg}>
            {/* HEXBIT.io */}
            <img src={imgLogo} alt="" />
          </div>
        </Link>

        <div></div>
      </nav>

      <div
        className={style.navList}
        id={count ? style.visible : style.notVisible}
      >
        <div className={style.mobileList} onClick={() => setCount(false)}>
          <Link to="/" className="LinkStyle">
            <p>Home</p>
          </Link>
        </div>
        <div className={style.mobileList} onClick={() => setCount(false)}>
          <Link to="/AboutUs" className="LinkStyle">
            <p>About Us</p>
          </Link>
        </div>
        <div className={style.mobileList} onClick={() => setCount(false)}>
          <Link to="/contact" className="LinkStyle">
            <p>Contact Us</p>
          </Link>
        </div>
        <div className={style.mobileList} onClick={() => setCount(false)}>
          <Link to="/signIn" className="LinkStyle">
            <p>Login</p>
          </Link>
        </div>
        <div className={style.mobileList} onClick={() => setCount(false)}>
          <Link to="/register" className="LinkStyle">
            <p>
              <b>Register for free</b>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default MobileHeader;
