import React, { useContext, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

// state
import AuthContext from "../../store/auth-context";

// css
import styles from "./Css/Header.module.css";

// img
import imgLogo from "./../../assets/logo/HexbitLogo.png";

const Header = () => {
  const authCtx = useContext(AuthContext);
  const redirect = useNavigate();

  return (
    <>
      <div className={styles.mDiv}>
        <div className={styles.mContDiv}>
          <Link to="/" className="LinkStyle">
            <div className={styles.titleP}>
              {/* HEXBIT.io */}
              <img src={imgLogo} alt="" className={styles.imgLogo} />
            </div>
          </Link>

          <div className={styles.rightDiv}>
            <NavLink to="/" className="LinkStyle">
              <div className={styles.tabsDiv}>
                <p>Home</p>
                <div className={styles.tabLineDiv}></div>
              </div>
            </NavLink>
            <NavLink to="/AboutUs" className="LinkStyle">
              <div className={styles.tabsDiv}>
                <p>About Us</p>
                <div className={styles.tabLineDiv}></div>
              </div>
            </NavLink>
            <NavLink to="/contact" className="LinkStyle">
              <div className={styles.tabsDiv}>
                <p>Contact Us</p>
                <div className={styles.tabLineDiv}></div>
              </div>
            </NavLink>
            {authCtx.isLoggedIn ? (
              <>
                <NavLink to="/me" className="LinkStyle">
                  <img
                    src={authCtx.user.image}
                    alt=""
                    className={styles.imgAuth}
                  />
                </NavLink>
              </>
            ) : (
              <>
                <NavLink to="/signIn" className="LinkStyle">
                  <div className={styles.tabsDiv}>
                    <p>Login</p>
                    <div className={styles.tabLineDiv}></div>
                  </div>
                </NavLink>
                <NavLink to="/register" className="LinkStyle">
                  <p className={styles.registerPTag}>
                    <b>Register for free</b>
                  </p>
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>

      <div className={styles.replaceDiv}></div>
    </>
  );
};

export default Header;
