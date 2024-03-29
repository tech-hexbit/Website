import React, { useState, useEffect, useContext } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";

// css
import style from "./Css/MobileHeader.module.css";

import imgLogo from "./../../assets/logo/HexbitLogo.png";

import AuthContext from "../../store/auth-context";

const MobileHeader = () => {
  const [count, setCount] = useState(false);

  const authCtx = useContext(AuthContext);

  const redirect = useNavigate();

  let location = useLocation();

  const logout = async () => {
    redirect("/signIn");
    authCtx.logout();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className={style.mobileNav}>
      <nav className={style.logoSign}>
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
          <img src={imgLogo} alt="" className={style.imgLogo} />
        </Link>

        <div></div>
      </nav>

      <div
        className={style.navList}
        id={count ? style.visible : style.notVisible}
      >
        {authCtx.isLoggedIn && (
          <div className={style.mobileList} onClick={() => setCount(false)}>
            <NavLink to="/me" className="LinkStyle">
              <img src={authCtx.user.image} alt="" className={style.imgAuth} />
            </NavLink>
          </div>
        )}
        <div className={style.mobileList} onClick={() => setCount(false)}>
          <NavLink to="/" className="LinkStyle">
            <p>Home</p>
          </NavLink>
        </div>
        <div className={style.mobileList} onClick={() => setCount(false)}>
          <NavLink to="/AboutUs" className="LinkStyle">
            <p>About Us</p>
          </NavLink>
        </div>
        <div className={style.mobileList} onClick={() => setCount(false)}>
          <NavLink to="/contact" className="LinkStyle">
            <p>Contact Us</p>
          </NavLink>
        </div>
        {!authCtx.isLoggedIn && (
          <>
            <div className={style.mobileList} onClick={() => setCount(false)}>
              <NavLink to="/signIn" className="LinkStyle">
                <p>Login</p>
              </NavLink>
            </div>
            <div className={style.mobileList} onClick={() => setCount(false)}>
              <NavLink to="/register" className="LinkStyle">
                <p id={style.Register}>Register for free</p>
              </NavLink>
            </div>
          </>
        )}
        {authCtx.isLoggedIn && (
          <>
            <div
              className={style.mobileList}
              id={style.logout}
              onClick={() => {
                setCount(false);
                logout();
              }}
            >
              <p>Logout</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default MobileHeader;
